"use client";

import React, { useEffect, useRef } from "react";

interface NebulaShaderProps {
  className?: string;
  speed?: number;
  opacity?: number;
}

export function NebulaShader({
  className = "",
  speed = 0.04,
  opacity = 0.85,
}: NebulaShaderProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext("webgl", { alpha: true, antialias: false, powerPreference: "low-power" }) ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);

    if (!gl) return;

    // Vertex Shader
    const vsSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Fragment Shader: Pure procedural WebGL GLSL Cosmic Nebula
    const fsSource = `
      precision mediump float;
      uniform vec2 u_resolution;
      uniform float u_time;

      float hash(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        vec2 shift = vec2(100.0);
        mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
        for (int i = 0; i < 5; ++i) {
          v += a * noise(p);
          p = rot * p * 2.0 + shift;
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);

        float t = u_time * 0.035;

        // Domain Warping for majestic organic nebula clouds
        vec2 q = vec2(fbm(p + vec2(0.0, t * 0.2)), fbm(p + vec2(5.2, 1.3 - t * 0.15)));
        vec2 r = vec2(fbm(p + 3.5 * q + vec2(1.7, 9.2 + t * 0.25)), fbm(p + 3.5 * q + vec2(8.3, 2.8 - t * 0.18)));
        float f = fbm(p + 3.5 * r);

        // Cosmic Deep Palette (deep nocturnal base, vivid purple/magenta cloud cores)
        vec3 bgCol = vec3(0.025, 0.028, 0.065);      // deep cosmic space (#060713)
        vec3 darkPurple = vec3(0.24, 0.04, 0.44);  // deep royal violet
        vec3 brightMagenta = vec3(0.68, 0.14, 0.95); // glowing vivid purple/magenta
        vec3 orchidGlow = vec3(0.88, 0.45, 1.0);   // radiant light orchid
        vec3 starWhite = vec3(1.0, 0.95, 1.0);     // celestial star cores

        vec3 col = mix(bgCol, darkPurple, clamp(f * f * 2.4, 0.0, 1.0));
        col = mix(col, brightMagenta, clamp(length(q) * 1.3 * f, 0.0, 1.0));
        col = mix(col, orchidGlow, clamp(length(r.x) * f * f * 1.6, 0.0, 1.0));

        // Celestial glowing energy points (star flares as seen in screenshot)
        vec2 star1 = vec2(0.55, 0.25);
        float d1 = length(p - star1);
        float flare1 = 0.035 / (d1 * d1 + 0.03);
        col += starWhite * flare1 * 0.45;

        vec2 star2 = vec2(-0.48, -0.3);
        float d2 = length(p - star2);
        float flare2 = 0.028 / (d2 * d2 + 0.025);
        col += starWhite * flare2 * 0.35;

        vec2 star3 = vec2(0.15, -0.15);
        float d3 = length(p - star3);
        float flare3 = 0.015 / (d3 * d3 + 0.02);
        col += starWhite * flare3 * 0.25;

        // Subtle dark vignette at edges for composition depth
        float vignette = smoothstep(1.8, 0.4, length(uv - 0.5) * 1.6);
        col *= vignette;

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    function compileShader(type: number, source: string) {
      const shader = gl!.createShader(type);
      if (!shader) return null;
      gl!.shaderSource(shader, source);
      gl!.compileShader(shader);
      if (!gl!.getShaderParameter(shader, gl!.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl!.getShaderInfoLog(shader));
        gl!.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = compileShader(gl.VERTEX_SHADER, vsSource);
    const fs = compileShader(gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Full-screen Quad (2 triangles)
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const positionLocation = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
    const timeLocation = gl.getUniformLocation(program, "u_time");

    let animationFrameId: number;
    let isVisible = true;
    let startTime = performance.now();

    function resize() {
      if (!canvas || !gl) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = Math.floor(canvas.clientWidth * dpr);
      const height = Math.floor(canvas.clientHeight * dpr);

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    }

    function render(currentTime: number) {
      if (!isVisible) return;
      resize();

      if (gl && resolutionLocation && timeLocation) {
        gl.uniform2f(resolutionLocation, canvas!.width, canvas!.height);
        gl.uniform1f(timeLocation, (currentTime - startTime) * 0.001);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }

      animationFrameId = requestAnimationFrame(render);
    }

    // IntersectionObserver: Pause rendering when offscreen (0% GPU when not in view)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(render);
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(canvas);
    window.addEventListener("resize", resize);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
      if (gl) {
        gl.deleteProgram(program);
        gl.deleteShader(vs);
        gl.deleteShader(fs);
        gl.deleteBuffer(positionBuffer);
      }
    };
  }, [speed]);

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="size-full object-cover" />
    </div>
  );
}
