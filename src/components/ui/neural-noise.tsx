'use client';

import { useEffect, useRef } from 'react';

interface NeuralNoiseProps {
  color?: [number, number, number];
  opacity?: number;
  speed?: number;
}

export function NeuralNoise({
  color = [0.92, 0.1, 0.1],
  opacity = 0.92,
  speed = 0.0007,
}: NeuralNoiseProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const uniformsRef = useRef<Record<string, WebGLUniformLocation | null>>({});
  const rafRef = useRef<number>(0);
  const pointer = useRef({ x: 0, y: 0, tX: 0, tY: 0 });

  useEffect(() => {
    const gl = initShader();
    if (!gl) return;
    glRef.current = gl;

    const cleanupEvents = setupEvents();
    resizeCanvas();

    const resizeListener = () => resizeCanvas();
    window.addEventListener('resize', resizeListener);

    // Initial uniform values
    gl.uniform3f(uniformsRef.current.u_color, color[0], color[1], color[2]);
    gl.uniform1f(uniformsRef.current.u_speed, speed);

    rafRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resizeListener);
      cleanupEvents();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Dynamic color uniform update
  useEffect(() => {
    const gl = glRef.current;
    if (gl && uniformsRef.current.u_color) {
      gl.useProgram(gl.getParameter(gl.CURRENT_PROGRAM));
      gl.uniform3f(uniformsRef.current.u_color, color[0], color[1], color[2]);
    }
  }, [color[0], color[1], color[2]]);

  // Dynamic speed uniform update
  useEffect(() => {
    const gl = glRef.current;
    if (gl && uniformsRef.current.u_speed) {
      gl.useProgram(gl.getParameter(gl.CURRENT_PROGRAM));
      gl.uniform1f(uniformsRef.current.u_speed, speed);
    }
  }, [speed]);

  function initShader(): WebGLRenderingContext | null {
    const vsSource = `
      precision mediump float;
      varying vec2 vUv;
      attribute vec2 a_position;
      void main() {
        vUv = 0.5 * (a_position + 1.0);
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;
    const fsSource = `
      precision mediump float;
      varying vec2 vUv;
      uniform float u_time;
      uniform float u_ratio;
      uniform vec2 u_pointer_position;
      uniform vec3 u_color;
      uniform float u_speed;
      vec2 rotate(vec2 uv, float th) {
        return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
      }
      float neuro_shape(vec2 uv, float t, float p) {
        vec2 sine_acc = vec2(0.0);
        vec2 res = vec2(0.0);
        float scale = 8.0;
        for (int j = 0; j < 15; j++) {
          uv = rotate(uv, 1.0);
          sine_acc = rotate(sine_acc, 1.0);
          vec2 layer = uv * scale + float(j) + sine_acc - t;
          sine_acc += sin(layer) + 2.4 * p;
          res += (0.5 + 0.5 * cos(layer)) / scale;
          scale *= 1.2;
        }
        return res.x + res.y;
      }
      void main() {
        vec2 uv = 0.5 * vUv;
        uv.x *= u_ratio;
        vec2 pointer = vUv - u_pointer_position;
        pointer.x *= u_ratio;
        float p = clamp(length(pointer), 0.0, 1.0);
        p = 0.5 * pow(1.0 - p, 2.0);
        float t = u_speed * u_time;
        vec3 col = vec3(0.0);
        float noise = neuro_shape(uv, t, p);
        noise = 1.6 * pow(noise, 2.4);
        noise += pow(noise, 6.0);
        noise = max(0.0, noise - 0.25);
        noise = min(noise, 1.0);
        float vignette = 1.0 - 0.35 * length(vUv - 0.5);
        noise *= vignette;
        col = u_color * noise * 2.0;
        col = min(col, vec3(1.0));
        gl_FragColor = vec4(col, noise);
      }
    `;

    const canvasEl = canvasRef.current;
    if (!canvasEl) return null;

    const gl =
      (canvasEl.getContext('webgl', { alpha: true, premultipliedAlpha: false }) ||
        canvasEl.getContext('experimental-webgl', { alpha: true, premultipliedAlpha: false })) as WebGLRenderingContext | null;
    if (!gl) {
      console.error('WebGL not supported');
      return null;
    }

    // Enable alpha blending so transparent pixels show the background through
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.clearColor(0, 0, 0, 0);

    const vertexShader = createShader(gl, vsSource, gl.VERTEX_SHADER);
    const fragmentShader = createShader(gl, fsSource, gl.FRAGMENT_SHADER);
    if (!vertexShader || !fragmentShader) return null;

    const shaderProgram = createProgram(gl, vertexShader, fragmentShader);
    if (!shaderProgram) return null;

    uniformsRef.current = getUniforms(gl, shaderProgram);

    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    gl.useProgram(shaderProgram);

    const positionLocation = gl.getAttribLocation(shaderProgram, 'a_position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    return gl;
  }

  function createShader(
    gl: WebGLRenderingContext,
    source: string,
    type: number
  ): WebGLShader | null {
    const shader = gl.createShader(type);
    if (!shader) return null;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('Shader compile error:', gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  function createProgram(
    gl: WebGLRenderingContext,
    vs: WebGLShader,
    fs: WebGLShader
  ): WebGLProgram | null {
    const program = gl.createProgram();
    if (!program) return null;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      return null;
    }
    return program;
  }

  function getUniforms(
    gl: WebGLRenderingContext,
    program: WebGLProgram
  ): Record<string, WebGLUniformLocation | null> {
    const result: Record<string, WebGLUniformLocation | null> = {};
    const uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS) as number;
    for (let i = 0; i < uniformCount; i++) {
      const info = gl.getActiveUniform(program, i);
      if (info) result[info.name] = gl.getUniformLocation(program, info.name);
    }
    return result;
  }

  function render() {
    const gl = glRef.current;
    const uniforms = uniformsRef.current;
    if (!gl) return;

    const currentTime = performance.now();
    pointer.current.x += (pointer.current.tX - pointer.current.x) * 0.2;
    pointer.current.y += (pointer.current.tY - pointer.current.y) * 0.2;

    // Clear to fully transparent each frame so background shows through
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.uniform1f(uniforms.u_time, currentTime);
    gl.uniform2f(
      uniforms.u_pointer_position,
      pointer.current.x / window.innerWidth,
      1 - pointer.current.y / window.innerHeight
    );
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    rafRef.current = requestAnimationFrame(render);
  }

  function resizeCanvas() {
    const gl = glRef.current;
    const uniforms = uniformsRef.current;
    const canvasEl = canvasRef.current;
    if (!canvasEl || !gl) return;

    const dpr = Math.min(window.devicePixelRatio, 2);
    canvasEl.width = window.innerWidth * dpr;
    canvasEl.height = window.innerHeight * dpr;

    if (uniforms.u_ratio != null) {
      gl.uniform1f(uniforms.u_ratio, canvasEl.width / canvasEl.height);
    }
    gl.viewport(0, 0, canvasEl.width, canvasEl.height);
  }

  function setupEvents() {
    const updatePointer = (x: number, y: number) => {
      pointer.current.tX = x;
      pointer.current.tY = y;
    };
    const onPointerMove = (e: PointerEvent) => updatePointer(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      if (e.targetTouches[0]) updatePointer(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
    };
    const onClick = (e: MouseEvent) => updatePointer(e.clientX, e.clientY);

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('click', onClick);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('click', onClick);
    };
  }

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity,
        zIndex: -10,
      }}
    />
  );
}
