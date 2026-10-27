"use client";

import * as React from "react";
import { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Mail, Phone, MapPin, CheckCircle2, Loader2, ChevronDown } from "lucide-react";
import * as d3 from "d3";
import { feature } from "topojson-client";
import type {
  Topology,
  GeometryCollection,
  GeometryObject,
} from "topojson-specification";
import type { GeoPermissibleObjects } from "d3";
import { submitContact, type ContactActionResult } from "@/app/contact/actions";
import { site } from "@/content/site";

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Phone,
    label: site.phone,
    href: site.whatsapp,
  },
  {
    icon: MapPin,
    label: `${site.location} · Global Delivery`,
    href: site.whatsapp,
  },
];

interface GlobeWireframeProps {
  width?: number;
  height?: number;
  className?: string;
  strokeColor?: string;
  strokeWidth?: number;
  graticuleColor?: string;
  graticuleOpacity?: number;
  sphereOutlineColor?: string;
  sphereOutlineWidth?: number;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  rotateToLocation?: string | [number, number];
  rotateCities?: string[];
  rotationSpeed?: number;
  initialRotation?: [number, number];
  enableInteraction?: boolean;
  showGraticule?: boolean;
  startAsGlobe?: boolean;
  countryFillColor?: string;
  countryHoverColor?: string;
  variant?: "wireframe" | "wireframesolid" | "solid";
  scale?: number;
  backgroundColor?: string;
}

interface GeoFeature {
  type: string;
  geometry: GeometryObject;
  properties: Record<string, unknown>;
}

interface WorldAtlasTopology extends Topology {
  objects: {
    countries: GeometryCollection;
  };
}

interface CustomProjection extends d3.GeoProjection {
  alpha(value: number): CustomProjection;
  alpha(): number;
}

const cityCoordinates: Record<string, [number, number]> = {
  "san francisco": [37.7749, -122.4194],
  "new york": [40.7128, -74.006],
  london: [51.5074, -0.1278],
  tokyo: [35.6762, 139.6503],
  paris: [48.8566, 2.3522],
  dhaka: [23.8103, 90.4125],
  dubai: [25.2048, 55.2708],
  singapore: [1.3521, 103.8198],
  sydney: [-33.8688, 151.2093],
};

function orthographicRaw(x: number, y: number): [number, number] {
  const cosy = Math.cos(y);
  return [cosy * Math.sin(x), Math.sin(y)];
}

function equirectangularRaw(lambda: number, phi: number): [number, number] {
  return [lambda, phi];
}

function interpolateProjection(
  raw0: (lambda: number, phi: number) => [number, number],
  raw1: (lambda: number, phi: number) => [number, number],
): CustomProjection {
  let t = 0;

  const createRawProjection = (
    alpha: number,
  ): ((lambda: number, phi: number) => [number, number]) => {
    return (lambda: number, phi: number): [number, number] => {
      const [x0, y0] = raw0(lambda, phi);
      const [x1, y1] = raw1(lambda, phi);
      return [x0 + alpha * (x1 - x0), y0 + alpha * (y1 - y0)];
    };
  };

  const projection = d3.geoProjection(
    createRawProjection(t),
  ) as unknown as CustomProjection;

  const alphaMethod = ((value?: number): CustomProjection | number => {
    if (value !== undefined) {
      t = +value;
      const newProjection = d3.geoProjection(
        createRawProjection(t),
      ) as unknown as CustomProjection;

      if (projection.scale()) newProjection.scale(projection.scale());
      if (projection.translate())
        newProjection.translate(projection.translate());
      if (projection.rotate()) newProjection.rotate(projection.rotate());
      if (projection.precision())
        newProjection.precision(projection.precision());

      newProjection.alpha = alphaMethod as CustomProjection["alpha"];

      return newProjection;
    }
    return t;
  }) as CustomProjection["alpha"];

  projection.alpha = alphaMethod;

  return projection;
}

export function GlobeWireframe({
  width,
  height,
  className = "aspect-square w-full max-w-150",
  strokeColor = "rgba(255, 255, 255, 0.45)",
  strokeWidth = 0.75,
  graticuleColor = "rgba(255, 255, 255, 0.12)",
  graticuleOpacity = 0.18,
  sphereOutlineColor = "rgba(255, 255, 255, 0.25)",
  sphereOutlineWidth = 1,
  autoRotate = true,
  autoRotateSpeed = 0.4,
  rotateToLocation,
  rotateCities = [],
  rotationSpeed = 3000,
  initialRotation = [0, -10],
  enableInteraction = true,
  showGraticule = true,
  startAsGlobe = true,
  countryFillColor,
  countryHoverColor,
  variant = "wireframesolid",
  scale = 1.05,
  backgroundColor,
}: GlobeWireframeProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress] = useState(startAsGlobe ? 0 : 100);
  const [worldData, setWorldData] = useState<GeoFeature[]>([]);
  const [rotation, setRotation] = useState<[number, number]>(initialRotation);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMouse, setLastMouse] = useState([0, 0]);
  const [isVisible, setIsVisible] = useState(false);
  const rotationInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  const rotationAnimFrame = useRef<number | null>(null);
  const rotationStartTime = useRef<number | null>(null);
  const rotationFrom = useRef<[number, number]>([0, 0]);
  const rotationTo = useRef<[number, number]>([0, 0]);
  const animationFrame = useRef<number | null>(null);
  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const resizeObserver = useRef<ResizeObserver | null>(null);
  const rotationRef = useRef(rotation);

  useEffect(() => {
    rotationRef.current = rotation;
  }, [rotation]);

  const useResponsive = !width && !height;
  const finalWidth = useResponsive ? dimensions.width : width || 800;
  const finalHeight = useResponsive ? dimensions.height : height || 500;

  const defaultStrokeColor = strokeColor || "currentColor";
  const defaultGraticuleColor = graticuleColor || "currentColor";
  const defaultSphereOutlineColor = sphereOutlineColor || "currentColor";
  const defaultCountryFillColor =
    countryFillColor || (variant === "solid" ? "currentColor" : "none");
  const defaultBackgroundColor = backgroundColor || "transparent";

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const updateDimensions = () => {
      if (container && useResponsive) {
        const width = container.offsetWidth || 300;
        setDimensions({ width, height: width });
      }
    };

    updateDimensions();

    if (useResponsive) {
      resizeObserver.current = new ResizeObserver(updateDimensions);
      resizeObserver.current.observe(container);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 },
    );

    observer.observe(container);

    return () => {
      if (resizeObserver.current) {
        resizeObserver.current.disconnect();
      }
      observer.unobserve(container);
    };
  }, [useResponsive]);

  // Load world atlas on demand when section enters viewport
  useEffect(() => {
    if (!isVisible && !worldData) return;
    let isCancelled = false;

    const loadWorldData = async () => {
      try {
        let response = await fetch("/data/countries-110m.json");
        if (!response.ok) {
          response = await fetch(
            "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json",
          );
        }
        const world = (await response.json()) as WorldAtlasTopology;
        const countries = feature(world, world.objects.countries)
          .features as GeoFeature[];
        if (!isCancelled) {
          setWorldData(countries);
        }
      } catch (error) {
        console.error("Error loading world data:", error);
        if (!isCancelled) {
          setWorldData([]);
        }
      }
    };

    loadWorldData();

    return () => {
      isCancelled = true;
    };
  }, []);

  // Continuous auto-rotation throttled via rAF
  useEffect(() => {
    if (!autoRotate || !isVisible || isDragging || rotateCities.length > 0) {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
        animationFrame.current = null;
      }
      return;
    }

    let lastTime = performance.now();

    const rotate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      const step = autoRotateSpeed * (delta / 16.67);
      setRotation((prev) => [(prev[0] + step) % 360, prev[1]]);
      animationFrame.current = requestAnimationFrame(rotate);
    };

    animationFrame.current = requestAnimationFrame(rotate);

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [autoRotate, autoRotateSpeed, isVisible, isDragging, rotateCities.length]);

  const animateRotationTo = useCallback(
    (target: [number, number], duration = 1200) => {
      if (rotationAnimFrame.current) {
        cancelAnimationFrame(rotationAnimFrame.current);
      }

      rotationFrom.current = rotationRef.current;
      rotationTo.current = target;
      rotationStartTime.current = performance.now();

      const animate = (time: number) => {
        const elapsed = time - (rotationStartTime.current || 0);
        const t = Math.min(elapsed / duration, 1);
        const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

        const lon =
          rotationFrom.current[0] +
          (rotationTo.current[0] - rotationFrom.current[0]) * eased;

        const lat =
          rotationFrom.current[1] +
          (rotationTo.current[1] - rotationFrom.current[1]) * eased;

        setRotation([lon, lat]);

        if (t < 1) {
          rotationAnimFrame.current = requestAnimationFrame(animate);
        }
      };

      rotationAnimFrame.current = requestAnimationFrame(animate);
    },
    [],
  );

  useEffect(() => {
    if (rotateCities.length === 0 || !isVisible) return;

    const rotateToNextCity = () => {
      const nextIndex = (currentCityIndex + 1) % rotateCities.length;
      const city = rotateCities[nextIndex].toLowerCase();
      const coordinates = cityCoordinates[city];

      if (coordinates) {
        animateRotationTo(
          [-coordinates[1], -coordinates[0]],
          rotationSpeed * 0.6,
        );
        setCurrentCityIndex(nextIndex);
      }
    };

    const city = rotateCities[currentCityIndex].toLowerCase();
    const coordinates = cityCoordinates[city];

    if (coordinates) {
      animateRotationTo(
        [-coordinates[1], -coordinates[0]],
        rotationSpeed * 0.6,
      );
    }

    rotationInterval.current = setInterval(rotateToNextCity, rotationSpeed);

    return () => {
      if (rotationInterval.current) clearInterval(rotationInterval.current);
    };
  }, [
    rotateCities,
    currentCityIndex,
    rotationSpeed,
    isVisible,
    animateRotationTo,
  ]);

  useEffect(() => {
    if (!rotateToLocation) return;

    let coordinates: [number, number];
    if (typeof rotateToLocation === "string") {
      const city = rotateToLocation.toLowerCase();
      coordinates = cityCoordinates[city] || [0, 0];
    } else {
      coordinates = rotateToLocation;
    }

    setRotation([-coordinates[1], -coordinates[0]]);
  }, [rotateToLocation]);

  const handleMouseDown = (event: React.MouseEvent) => {
    if (!enableInteraction) return;
    setIsDragging(true);
    const rect = svgRef.current?.getBoundingClientRect();
    if (rect) {
      setLastMouse([event.clientX - rect.left, event.clientY - rect.top]);
    }
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isDragging || !enableInteraction) return;
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return;

    const currentMouse = [event.clientX - rect.left, event.clientY - rect.top];
    const dx = currentMouse[0] - lastMouse[0];
    const dy = currentMouse[1] - lastMouse[1];

    const sensitivity = 0.4;
    setRotation((prev) => [
      prev[0] + dx * sensitivity,
      Math.max(-80, Math.min(80, prev[1] - dy * sensitivity)),
    ]);

    setLastMouse(currentMouse);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (!svgRef.current || worldData.length === 0 || !isVisible) return;
    if (useResponsive && dimensions.width === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    let finalCountryFill = "none";
    let finalStrokeWidth = strokeWidth;
    let finalOpacity = 1.0;
    let renderGraticule = showGraticule;
    let finalGraticuleOpacity = graticuleOpacity;
    let finalSphereOutlineWidth = sphereOutlineWidth;

    if (variant === "wireframe") {
      finalCountryFill = "none";
      finalStrokeWidth = strokeWidth;
      finalOpacity = 1.0;
      renderGraticule = showGraticule;
      finalGraticuleOpacity = graticuleOpacity;
      finalSphereOutlineWidth = sphereOutlineWidth;
    } else if (variant === "wireframesolid") {
      finalCountryFill = "none";
      finalStrokeWidth = strokeWidth;
      finalOpacity = 0.95;
      renderGraticule = true;
      finalGraticuleOpacity = 0.15;
      finalSphereOutlineWidth = 1.2;
    } else if (variant === "solid") {
      finalCountryFill = defaultCountryFillColor;
      finalStrokeWidth = strokeWidth * 0.5;
      finalOpacity = 0.3;
      renderGraticule = false;
      finalGraticuleOpacity = 0;
      finalSphereOutlineWidth = 1.5;
    }

    if (defaultBackgroundColor !== "transparent") {
      const radius = (Math.min(finalWidth, finalHeight) / 2) * scale * 0.9;
      svg
        .append("circle")
        .attr("cx", finalWidth / 2)
        .attr("cy", finalHeight / 2)
        .attr("r", radius)
        .attr("fill", defaultBackgroundColor);
    }

    let projection: d3.GeoProjection | CustomProjection;
    const path = d3.geoPath();

    if (variant === "wireframe") {
      const t = progress / 100;
      const alpha = Math.pow(t, 0.5);

      const baseScale = Math.min(finalWidth, finalHeight) / 2;
      const scaleRange = d3
        .scaleLinear()
        .domain([0, 1])
        .range([baseScale * 0.9 * scale, baseScale * 0.54 * scale]);
      const baseRotate = d3.scaleLinear().domain([0, 1]).range([0, 0]);

      projection = interpolateProjection(orthographicRaw, equirectangularRaw)
        .scale(scaleRange(alpha))
        .translate([finalWidth / 2, finalHeight / 2])
        .rotate([baseRotate(alpha) + rotation[0], rotation[1]])
        .precision(0.1);

      (projection as CustomProjection).alpha(alpha);
      path.projection(projection);
    } else {
      projection = d3
        .geoOrthographic()
        .scale((Math.min(finalWidth, finalHeight) / 2) * scale * 0.9)
        .translate([finalWidth / 2, finalHeight / 2])
        .rotate([rotation[0], rotation[1]])
        .precision(0.1);

      path.projection(projection);
    }

    // Graticule grid lines
    if (renderGraticule && finalGraticuleOpacity > 0) {
      try {
        const graticule = d3.geoGraticule();
        const graticulePath = path(graticule());
        if (graticulePath) {
          svg
            .append("path")
            .datum(graticule())
            .attr("d", graticulePath)
            .attr("fill", "none")
            .attr("stroke", defaultGraticuleColor)
            .attr("stroke-width", 0.75)
            .attr("opacity", finalGraticuleOpacity);
        }
      } catch (error) {
        console.error("Error creating graticule:", error);
      }
    }

    // Countries paths
    svg
      .selectAll(".country")
      .data(worldData)
      .enter()
      .append("path")
      .attr("class", "country")
      .attr("d", (d: GeoFeature) => {
        try {
          const pathString = path(d as unknown as GeoPermissibleObjects);
          if (!pathString) return "";
          if (
            typeof pathString === "string" &&
            (pathString.includes("NaN") || pathString.includes("Infinity"))
          ) {
            return "";
          }
          return pathString;
        } catch {
          return "";
        }
      })
      .attr("fill", finalCountryFill)
      .attr("stroke", defaultStrokeColor)
      .attr("stroke-width", finalStrokeWidth)
      .attr("opacity", finalOpacity)
      .style("visibility", function (this: SVGPathElement) {
        const pathData = d3.select(this).attr("d");
        return pathData && pathData.length > 0 && !pathData.includes("NaN")
          ? "visible"
          : "hidden";
      })
      .on("mouseenter", function (this: SVGPathElement) {
        if (countryHoverColor && variant === "solid") {
          d3.select(this).attr("fill", countryHoverColor);
        }
      })
      .on("mouseleave", function (this: SVGPathElement) {
        if (variant === "solid") {
          d3.select(this).attr("fill", finalCountryFill);
        }
      });

    // Outer spherical rim
    try {
      const sphereOutline = path({ type: "Sphere" });
      if (sphereOutline) {
        svg
          .append("path")
          .datum({ type: "Sphere" })
          .attr("d", sphereOutline)
          .attr("fill", "none")
          .attr("stroke", defaultSphereOutlineColor)
          .attr("stroke-width", finalSphereOutlineWidth)
          .attr("opacity", 0.5);
      }
    } catch (error) {
      console.error("Error creating sphere outline:", error);
    }
  }, [
    worldData,
    progress,
    rotation,
    isVisible,
    finalWidth,
    finalHeight,
    defaultStrokeColor,
    strokeWidth,
    defaultGraticuleColor,
    graticuleOpacity,
    defaultSphereOutlineColor,
    sphereOutlineWidth,
    showGraticule,
    defaultCountryFillColor,
    countryHoverColor,
    variant,
    scale,
    defaultBackgroundColor,
    useResponsive,
    dimensions.width,
  ]);

  return (
    <div ref={containerRef} className={cn("relative select-none", className)}>
      <svg
        ref={svgRef}
        width={finalWidth}
        height={finalHeight}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        className={
          useResponsive
            ? "w-full h-full opacity-0 transition-opacity duration-1000"
            : ""
        }
        style={{
          cursor: enableInteraction
            ? isDragging
              ? "grabbing"
              : "grab"
            : "default",
          opacity: useResponsive ? (dimensions.width > 0 ? 1 : 0) : 1,
        }}
      />
    </div>
  );
}

/** Subtle horizontal dotted separator */
function FormDots() {
  return (
    <div className="w-full h-2.5 flex items-center justify-center overflow-hidden">
      <div
        className="w-full h-px opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255, 255, 255, 0.7) 1px, transparent 1px)",
          backgroundSize: "7px 1px",
        }}
      />
    </div>
  );
}

export default function ContactWithGlobe({ className }: { className?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<ContactActionResult | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFieldErrors({});

    const formData = new FormData(e.currentTarget);

    const service = formData.get("service")?.toString().trim();
    if (service) {
      formData.set("subject", `Inquiry for ${service}`);
    }

    try {
      const res = await submitContact(formData);
      setResult(res);
      if (!res.success && res.errors) {
        setFieldErrors(res.errors);
      } else if (res.success) {
        formRef.current?.reset();
      }
    } catch {
      setResult({
        success: false,
        message: "Failed to deliver message. Please reach out via WhatsApp directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_560px] xl:grid-cols-[1fr_580px] gap-8 lg:gap-14 items-center w-full">
        {/* Left Column: Get In Touch + Channels + Continuous Rotating Wireframe Globe */}
        <div className="flex flex-col justify-between self-stretch pt-1">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-tight">
                Get in touch
              </h2>
              <p className="text-sm sm:text-[15px] text-slate-400 leading-relaxed mt-2 max-w-md">
                Reach out via any channel below. We typically reply within one business day.
              </p>
            </div>

            {/* Channels List matching the reference screenshot */}
            <div className="flex flex-col gap-3">
              {CONTACT_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-3.5 w-fit text-sm text-slate-400 hover:text-white transition-colors duration-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-[var(--surface-2)] border border-white/10 group-hover:border-[var(--accent)]/40 group-hover:bg-[var(--accent-soft)] flex items-center justify-center shrink-0 transition-all duration-200">
                    <Icon className="w-3.5 h-3.5 text-slate-400 group-hover:text-[var(--accent-text)] transition-colors duration-200" />
                  </div>
                  <span className="font-normal text-slate-300 group-hover:text-white transition-colors duration-200">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Interactive Continously Rotating Wireframe Globe */}
          <div className="relative overflow-hidden h-52 sm:h-60 mt-4 rounded-2xl">
            <GlobeWireframe
              className="w-full aspect-square max-w-full absolute -top-4 sm:-top-6 left-0"
              variant="wireframesolid"
              autoRotate={true}
              autoRotateSpeed={0.45}
              strokeColor="rgba(255, 255, 255, 0.45)"
              strokeWidth={0.7}
              graticuleColor="rgba(255, 255, 255, 0.12)"
              graticuleOpacity={0.16}
              sphereOutlineColor="rgba(255, 255, 255, 0.25)"
              enableInteraction={true}
            />
            {/* Soft fade mask blending into the cosmic page background */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/80 to-transparent" />
          </div>
        </div>

        {/* Right Column: Architectural Form Card matching the screenshot (NO budget field) */}
        <div className="rounded-2xl sm:rounded-3xl border border-white/12 bg-[var(--surface)] p-6 sm:p-8 flex flex-col gap-4 sm:gap-5 shadow-[0_24px_60px_rgba(0,0,0,0.65)] relative">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 tracking-tight">
              Send a message
            </h3>
            <p className="text-sm text-slate-400">
              Fill out the form and we&apos;ll get back to you promptly.
            </p>
          </div>

          <FormDots />

          {result?.success ? (
            <div className="py-10 flex flex-col items-center text-center gap-4 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Message Delivered!</h4>
                <p className="text-sm text-slate-400 max-w-sm mt-1">
                  Thank you for reaching out. We have received your message and will get back to you shortly.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setResult(null)}
                className="mt-2 text-xs font-semibold text-[var(--accent-text)] hover:text-white underline underline-offset-4 cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Anti-spam honeypot */}
              <input
                type="text"
                name="company_url"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              {/* Row 1: Full Name & Service Type (2 columns) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold tracking-widest uppercase text-slate-400">
                    Full Name <span className="text-[var(--accent)]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Alex Chen"
                    className="w-full bg-[var(--bg)]/90 border border-white/12 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-soft)] transition-all duration-200"
                  />
                  {fieldErrors.name && (
                    <span className="text-xs text-rose-400">{fieldErrors.name}</span>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold tracking-widest uppercase text-slate-400">
                    Service Type <span className="text-[var(--accent)]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="service"
                      required
                      defaultValue=""
                      className="w-full appearance-none bg-[var(--bg)]/90 border border-white/12 rounded-xl px-4 py-2.5 pr-10 text-sm text-white outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-soft)] transition-all duration-200 cursor-pointer"
                    >
                      <option value="" disabled className="bg-[var(--surface)] text-slate-500">
                        Select a service...
                      </option>
                      <option value="Full Stack Web Development" className="bg-[var(--surface)] text-white">
                        Full Stack Web Development
                      </option>
                      <option value="Web & Mobile Applications" className="bg-[var(--surface)] text-white">
                        Web & Mobile Applications
                      </option>
                      <option value="UI/UX & Product Design" className="bg-[var(--surface)] text-white">
                        UI/UX & Product Design
                      </option>
                      <option value="Business Management Systems (ERP/CRM)" className="bg-[var(--surface)] text-white">
                        Business Management Systems (ERP/CRM)
                      </option>
                      <option value="AI Agents & Workflow Automation" className="bg-[var(--surface)] text-white">
                        AI Agents & Workflow Automation
                      </option>
                      <option value="Custom Bots (WhatsApp / Telegram)" className="bg-[var(--surface)] text-white">
                        Custom Bots (WhatsApp / Telegram)
                      </option>
                      <option value="General Architecture Consultation" className="bg-[var(--surface)] text-white">
                        General Consultation / Other
                      </option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2" />
                  </div>
                  {fieldErrors.service && (
                    <span className="text-xs text-rose-400">{fieldErrors.service}</span>
                  )}
                </div>
              </div>

              {/* Row 2: Email Address (full width) */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-semibold tracking-widest uppercase text-slate-400">
                  Email Address <span className="text-[var(--accent)]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="alex@company.com"
                  className="w-full bg-[var(--bg)]/90 border border-white/12 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-soft)] transition-all duration-200"
                />
                {fieldErrors.email && (
                  <span className="text-xs text-rose-400">{fieldErrors.email}</span>
                )}
              </div>

              {/* Row 3: Message (textarea, full width) */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-semibold tracking-widest uppercase text-slate-400">
                  Message <span className="text-[var(--accent)]">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  minLength={20}
                  placeholder="Tell us about what you want to build (timeline, tech requirements, scope)..."
                  rows={4}
                  className="w-full bg-[var(--bg)]/90 border border-white/12 rounded-xl px-4 py-2.5 sm:py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-soft)] resize-none transition-all duration-200"
                />
                {fieldErrors.message && (
                  <span className="text-xs text-rose-400">{fieldErrors.message}</span>
                )}
              </div>

              {result?.message && !result.success && (
                <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs">
                  {result.message}
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-fit h-11 px-7 rounded-xl font-semibold text-sm bg-white hover:bg-slate-100 text-slate-950 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
