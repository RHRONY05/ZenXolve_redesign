"use client";

import { useEffect, useRef, useState } from "react";

/** The lightning mark as a polygon (y up). Shared by the 3D mesh and the static poster. */
const BOLT: [number, number][] = [
  [0.05, 1],
  [0.6, 1],
  [0.2, 0.2],
  [0.65, 0.2],
  [-0.3, -1],
  [-0.05, -0.1],
  [-0.55, -0.1],
];

/**
 * Hero object: a glossy, inflated cobalt lightning bolt with a few floating orbs (Three.js, studio reflections).
 * It leans toward your cursor and spins when you click. Three.js is loaded after first paint; until then (and
 * when WebGL or JS is unavailable) a flat poster of the same bolt is shown. Paused off-screen / in a hidden tab,
 * and a single still frame under prefers-reduced-motion.
 */
export function HeroBolt({ rectClass = "inset-x-0 top-0 h-[62%] md:inset-y-0 md:right-0 md:left-auto md:h-auto md:w-[62%]" }: { rectClass?: string }) {
  const rect = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const box = rect.current;
    const cv = canvas.current;
    if (!box || !cv) return;
    const scope = box.closest("section, [data-bolt-scope]") ?? box.parentElement;
    if (!scope) return;
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;

    let disposed = false;
    let cleanup = () => {};

    const start = async () => {
      const THREE = await import("three");
      const { RoomEnvironment } = await import("three/examples/jsm/environments/RoomEnvironment.js");
      const { mergeVertices } = await import("three/examples/jsm/utils/BufferGeometryUtils.js");
      if (disposed) return;

      let renderer: import("three").WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({ canvas: cv, antialias: true, alpha: true, powerPreference: "high-performance" });
      } catch {
        return; // no WebGL: the poster stays
      }
      renderer.setPixelRatio(Math.min(devicePixelRatio || 1, innerWidth < 768 ? 1.5 : 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.05;

      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
      const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50);
      camera.position.set(0, 0, 7);

      // Rounded polygon → shape → puffy extrusion with smooth normals
      const r = 0.09;
      const shape = new THREE.Shape();
      BOLT.forEach((p, i) => {
        const p0 = BOLT[(i + BOLT.length - 1) % BOLT.length];
        const p2 = BOLT[(i + 1) % BOLT.length];
        const toward = (q: [number, number]) => {
          const dx = q[0] - p[0];
          const dy = q[1] - p[1];
          const l = Math.hypot(dx, dy);
          return [p[0] + (dx / l) * r, p[1] + (dy / l) * r] as const;
        };
        const a = toward(p0);
        const b = toward(p2);
        if (i === 0) shape.moveTo(a[0], a[1]);
        else shape.lineTo(a[0], a[1]);
        shape.quadraticCurveTo(p[0], p[1], b[0], b[1]);
      });
      shape.closePath();
      let geo: import("three").BufferGeometry = new THREE.ExtrudeGeometry(shape, {
        depth: 0.04,
        bevelEnabled: true,
        bevelThickness: 0.42,
        bevelSize: 0.16,
        bevelSegments: 22,
        curveSegments: 20,
      });
      geo.center();
      geo.deleteAttribute("normal");
      geo.deleteAttribute("uv");
      geo = mergeVertices(geo, 1e-3);
      geo.computeVertexNormals();

      const cobalt = new THREE.MeshPhysicalMaterial({ color: 0x2f4bff, metalness: 0.85, roughness: 0.17, clearcoat: 1, clearcoatRoughness: 0.06, envMapIntensity: 1.35 });
      const lavender = new THREE.MeshPhysicalMaterial({ color: 0xd9c8ff, metalness: 0.4, roughness: 0.15, clearcoat: 1, envMapIntensity: 1.1 });
      const chrome = new THREE.MeshPhysicalMaterial({ color: 0xffffff, metalness: 1, roughness: 0.06, envMapIntensity: 1.2 });

      const rig = new THREE.Group();
      const bolt = new THREE.Mesh(geo, cobalt);
      rig.add(bolt);
      scene.add(rig);

      const sphere = new THREE.SphereGeometry(1, 48, 32);
      const orbs = (
        [
          [1.2, 0.72, 0.45, 0.17, lavender, 0.0],
          [-1.15, -0.75, 0.65, 0.1, chrome, 1.7],
          [1.15, -0.4, -0.2, 0.07, cobalt, 3.1],
          [-1.0, 0.85, -0.3, 0.06, chrome, 4.4],
        ] as const
      ).map(([x, y, z, s, m, ph]) => {
        const o = new THREE.Mesh(sphere, m);
        o.position.set(x, y, z);
        o.scale.setScalar(s);
        scene.add(o);
        return { o, y, ph };
      });

      const key = new THREE.PointLight(0xb9a8ff, 55, 14, 2);
      key.position.set(-3, 2.2, 3.2);
      const rim = new THREE.PointLight(0x2f4bff, 70, 14, 2);
      rim.position.set(3.2, -2, -1.5);
      scene.add(key, rim);

      let w = 0;
      let h = 0;
      const resize = () => {
        const b = box.getBoundingClientRect();
        w = Math.max(1, b.width);
        h = Math.max(1, b.height);
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        // visible height at z=7 is ~4 units; keep the bolt ~58% of it, narrower rects scale down a bit
        rig.scale.setScalar(Math.min(0.82, 0.62 * (camera.aspect < 1 ? camera.aspect * 1.55 + 0.35 : 2)));
        camera.updateProjectionMatrix();
        rig.position.y = camera.aspect < 1 ? 0.05 : 0.3;
      };
      const ro = new ResizeObserver(resize);
      ro.observe(box);
      resize();

      let tx = 0;
      let ty = 0;
      let rx = 0;
      let ry = 0;
      let spin = 0;
      let angle = 0.35;
      let visible = true;
      let raf = 0;
      let last = performance.now();

      const draw = (now: number) => {
        const dt = Math.min(0.05, (now - last) / 1000);
        last = now;
        const t = now / 1000;
        rx += (ty - rx) * Math.min(1, dt * 4);
        ry += (tx - ry) * Math.min(1, dt * 4);
        spin *= Math.exp(-2.4 * dt);
        angle += spin * dt;
        rig.rotation.set(rx * 0.32, angle + ry * 0.5 + Math.sin(t * 0.55) * 0.22, Math.sin(t * 0.4) * 0.04);
        rig.position.y += (Math.sin(t * 0.9) * 0.05 + (w / h < 1 ? 0.05 : 0.3) - rig.position.y) * 0.1;
        orbs.forEach(({ o, y, ph }) => (o.position.y = y + Math.sin(t * 0.8 + ph) * 0.09));
        renderer.render(scene, camera);
      };
      const loop = (now: number) => {
        if (!visible || document.hidden) {
          raf = 0;
          return;
        }
        draw(now);
        raf = requestAnimationFrame(loop);
      };
      const wake = () => {
        if (!still && !raf && visible && !document.hidden) {
          last = performance.now();
          raf = requestAnimationFrame(loop);
        }
      };

      const onMove = (e: PointerEvent) => {
        const b = scope.getBoundingClientRect();
        tx = ((e.clientX - b.left) / b.width) * 2 - 1;
        ty = ((e.clientY - b.top) / b.height) * 2 - 1;
      };
      const onDown = (e: PointerEvent) => {
        if ((e.target as HTMLElement).closest("a, button")) return;
        spin = 7;
      };
      const io = new IntersectionObserver(([en]) => {
        visible = en.isIntersecting;
        wake();
      });
      io.observe(scope);
      document.addEventListener("visibilitychange", wake);

      draw(performance.now());
      requestAnimationFrame(() => !disposed && setReady(true));
      if (!still) {
        scope.addEventListener("pointermove", onMove as EventListener);
        scope.addEventListener("pointerdown", onDown as EventListener);
        wake();
      }

      cleanup = () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        io.disconnect();
        document.removeEventListener("visibilitychange", wake);
        scope.removeEventListener("pointermove", onMove as EventListener);
        scope.removeEventListener("pointerdown", onDown as EventListener);
        geo.dispose();
        sphere.dispose();
        [cobalt, lavender, chrome].forEach((m) => m.dispose());
        pmrem.dispose();
        renderer.dispose();
      };
    };

    const idle = (window as unknown as { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number }).requestIdleCallback;
    const kick = () => void start();
    const handle = idle ? idle(kick, { timeout: 1200 }) : window.setTimeout(kick, 400);

    return () => {
      disposed = true;
      if (!idle) clearTimeout(handle);
      cleanup();
    };
  }, []);

  return (
    <div ref={rect} className={`pointer-events-none absolute z-[1] ${rectClass}`} aria-hidden>
      {/* Poster: same bolt, flat. Visible while Three.js loads and when WebGL is unavailable. */}
      <div
        className="absolute inset-0 grid place-items-center transition-opacity duration-700"
        style={{ opacity: ready ? 0 : 1 }}
      >
        <svg viewBox="-1 -1.4 2 2.8" className="h-[58%] w-auto drop-shadow-[0_0_60px_color-mix(in_srgb,var(--panel-cobalt)_70%,transparent)]">
          <defs>
            <linearGradient id="bolt-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="var(--panel-cobalt)" />
              <stop offset="1" stopColor="var(--flash)" />
            </linearGradient>
          </defs>
          <polygon
            points={BOLT.map(([x, y]) => `${x},${-y}`).join(" ")}
            fill="url(#bolt-g)"
            stroke="url(#bolt-g)"
            strokeWidth="0.14"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <canvas ref={canvas} className="absolute inset-0 size-full transition-opacity duration-700" style={{ opacity: ready ? 1 : 0 }} />
    </div>
  );
}
