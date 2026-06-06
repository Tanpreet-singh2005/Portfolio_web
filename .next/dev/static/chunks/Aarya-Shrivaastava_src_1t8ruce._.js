(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Aarya-Shrivaastava/src/components/ui/neural-noise.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NeuralNoise",
    ()=>NeuralNoise
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Aarya-Shrivaastava/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Aarya-Shrivaastava/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function NeuralNoise({ color = [
    0.92,
    0.1,
    0.1
], opacity = 0.92, speed = 0.0007 }) {
    _s();
    var _s1 = __turbopack_context__.k.signature();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const glRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const pointer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0,
        tX: 0,
        tY: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NeuralNoise.useEffect": ()=>{
            const gl = initShader();
            if (!gl) return;
            glRef.current = gl;
            const cleanupEvents = setupEvents();
            resizeCanvas();
            const resizeListener = {
                "NeuralNoise.useEffect.resizeListener": ()=>resizeCanvas()
            }["NeuralNoise.useEffect.resizeListener"];
            window.addEventListener('resize', resizeListener);
            // Initial uniform values
            gl.uniform3f(uniformsRef.current.u_color, color[0], color[1], color[2]);
            gl.uniform1f(uniformsRef.current.u_speed, speed);
            rafRef.current = requestAnimationFrame(render);
            return ({
                "NeuralNoise.useEffect": ()=>{
                    cancelAnimationFrame(rafRef.current);
                    window.removeEventListener('resize', resizeListener);
                    cleanupEvents();
                }
            })["NeuralNoise.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["NeuralNoise.useEffect"], []);
    // Dynamic color uniform update
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NeuralNoise.useEffect": ()=>{
            const gl = glRef.current;
            if (gl && uniformsRef.current.u_color) {
                gl.useProgram(gl.getParameter(gl.CURRENT_PROGRAM));
                gl.uniform3f(uniformsRef.current.u_color, color[0], color[1], color[2]);
            }
        }
    }["NeuralNoise.useEffect"], [
        color[0],
        color[1],
        color[2]
    ]);
    // Dynamic speed uniform update
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NeuralNoise.useEffect": ()=>{
            const gl = glRef.current;
            if (gl && uniformsRef.current.u_speed) {
                gl.useProgram(gl.getParameter(gl.CURRENT_PROGRAM));
                gl.uniform1f(uniformsRef.current.u_speed, speed);
            }
        }
    }["NeuralNoise.useEffect"], [
        speed
    ]);
    function initShader() {
        _s1();
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
        const gl = canvasEl.getContext('webgl', {
            alpha: true,
            premultipliedAlpha: false
        }) || canvasEl.getContext('experimental-webgl', {
            alpha: true,
            premultipliedAlpha: false
        });
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
        const vertices = new Float32Array([
            -1,
            -1,
            1,
            -1,
            -1,
            1,
            1,
            1
        ]);
        const vertexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
        gl.useProgram(shaderProgram);
        const positionLocation = gl.getAttribLocation(shaderProgram, 'a_position');
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
        return gl;
    }
    _s1(initShader, "ZdQBZ3rq7bWAAMQq6hlVCmYF0jM=", true);
    function createShader(gl, source, type) {
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
    function createProgram(gl, vs, fs) {
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
    function getUniforms(gl, program) {
        const result = {};
        const uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
        for(let i = 0; i < uniformCount; i++){
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
        gl.uniform2f(uniforms.u_pointer_position, pointer.current.x / window.innerWidth, 1 - pointer.current.y / window.innerHeight);
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
        const updatePointer = (x, y)=>{
            pointer.current.tX = x;
            pointer.current.tY = y;
        };
        const onPointerMove = (e)=>updatePointer(e.clientX, e.clientY);
        const onTouchMove = (e)=>{
            if (e.targetTouches[0]) updatePointer(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
        };
        const onClick = (e)=>updatePointer(e.clientX, e.clientY);
        window.addEventListener('pointermove', onPointerMove);
        window.addEventListener('touchmove', onTouchMove);
        window.addEventListener('click', onClick);
        return ()=>{
            window.removeEventListener('pointermove', onPointerMove);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('click', onClick);
        };
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        style: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            opacity,
            zIndex: -10
        }
    }, void 0, false, {
        fileName: "[project]/Aarya-Shrivaastava/src/components/ui/neural-noise.tsx",
        lineNumber: 268,
        columnNumber: 5
    }, this);
}
_s(NeuralNoise, "S9FK70zlpLjCae4NklDgVbBr8WA=");
_c = NeuralNoise;
var _c;
__turbopack_context__.k.register(_c, "NeuralNoise");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Aarya-Shrivaastava/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Aarya-Shrivaastava/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Aarya-Shrivaastava/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const NAV_LINKS = [
    {
        label: 'Home',
        href: '#hero'
    },
    {
        label: 'About',
        href: '#about'
    },
    {
        label: 'Skills',
        href: '#skills'
    },
    {
        label: 'Experience',
        href: '#experience'
    },
    {
        label: 'Certifications',
        href: '#certifications'
    },
    {
        label: 'Resume',
        href: '#resume'
    }
];
function Navbar({ theme, toggleTheme }) {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('hero');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>setScrolled(window.scrollY > 40)
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const sections = NAV_LINKS.map({
                "Navbar.useEffect.sections": (l)=>l.href.replace('#', '')
            }["Navbar.useEffect.sections"]);
            const observer = new IntersectionObserver({
                "Navbar.useEffect": (entries)=>{
                    entries.forEach({
                        "Navbar.useEffect": (e)=>{
                            if (e.isIntersecting) setActiveSection(e.target.id);
                        }
                    }["Navbar.useEffect"]);
                }
            }["Navbar.useEffect"], {
                threshold: 0.4
            });
            sections.forEach({
                "Navbar.useEffect": (id)=>{
                    const el = document.getElementById(id);
                    if (el) observer.observe(el);
                }
            }["Navbar.useEffect"]);
            return ({
                "Navbar.useEffect": ()=>observer.disconnect()
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass py-4 shadow-lg' : 'py-6 bg-transparent'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-6 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#hero",
                        className: "flex items-center gap-2 group",
                        "aria-label": "Aarya Shrivaastava logo",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-9 h-9 rounded-lg btn-shimmer flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform",
                            children: "AS"
                        }, void 0, false, {
                            fileName: "[project]/Aarya-Shrivaastava/src/components/Navbar.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Aarya-Shrivaastava/src/components/Navbar.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "hidden md:flex items-center gap-10",
                        children: NAV_LINKS.map(({ label, href })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: href,
                                    className: `nav-link text-xs font-semibold tracking-widest uppercase transition-colors ${activeSection === href.replace('#', '') ? 'text-red-400' : 'text-foreground opacity-50 hover:opacity-100'}`,
                                    children: label
                                }, void 0, false, {
                                    fileName: "[project]/Aarya-Shrivaastava/src/components/Navbar.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this)
                            }, href, false, {
                                fileName: "[project]/Aarya-Shrivaastava/src/components/Navbar.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Aarya-Shrivaastava/src/components/Navbar.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleTheme,
                                className: "flex items-center justify-center w-11 h-11 rounded-full glass border border-red-500/25 text-foreground opacity-60 hover:opacity-100 hover:border-red-400 transition-all hover:bg-red-500/10 hover:scale-110 cursor-pointer",
                                "aria-label": "Toggle theme",
                                children: theme === 'dark' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: 2,
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.728 6.343A9 9 0 115.636 5.636m12.728 12.728A9 9 0 015.636 5.636"
                                    }, void 0, false, {
                                        fileName: "[project]/Aarya-Shrivaastava/src/components/Navbar.tsx",
                                        lineNumber: 82,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Aarya-Shrivaastava/src/components/Navbar.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: 2,
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    }, void 0, false, {
                                        fileName: "[project]/Aarya-Shrivaastava/src/components/Navbar.tsx",
                                        lineNumber: 86,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Aarya-Shrivaastava/src/components/Navbar.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Aarya-Shrivaastava/src/components/Navbar.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://github.com/AaryaShrivaastava",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "flex items-center justify-center w-11 h-11 rounded-full glass border border-red-500/25 text-foreground opacity-60 hover:opacity-100 hover:border-red-400 transition-all hover:bg-red-500/10 hover:scale-110",
                                "aria-label": "GitHub Profile",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                                    }, void 0, false, {
                                        fileName: "[project]/Aarya-Shrivaastava/src/components/Navbar.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Aarya-Shrivaastava/src/components/Navbar.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Aarya-Shrivaastava/src/components/Navbar.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Aarya-Shrivaastava/src/components/Navbar.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex md:hidden items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleTheme,
                                className: "flex items-center justify-center w-10 h-10 rounded-full glass border border-red-500/25 text-foreground opacity-60 hover:opacity-100 hover:bg-red-500/10 transition-all cursor-pointer",
                                "aria-label": "Toggle theme",
                                children: theme === 'dark' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: 2,
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.728 6.343A9 9 0 115.636 5.636m12.728 12.728A9 9 0 015.636 5.636"
                                    }, void 0, false, {
                                        fileName: "[project]/Aarya-Shrivaastava/src/components/Navbar.tsx",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Aarya-Shrivaastava/src/components/Navbar.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: 2,
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    }, void 0, false, {
                                        fileName: "[project]/Aarya-Shrivaastava/src/components/Navbar.tsx",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Aarya-Shrivaastava/src/components/Navbar.tsx",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Aarya-Shrivaastava/src/components/Navbar.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-foreground p-2 cursor-pointer",
                                onClick: ()=>setMenuOpen(!menuOpen),
                                "aria-label": "Toggle menu",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-6 h-0.5 bg-foreground mb-1.5 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`,
                                        style: {
                                            opacity: 1
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Aarya-Shrivaastava/src/components/Navbar.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-6 h-0.5 bg-foreground mb-1.5 transition-all ${menuOpen ? 'opacity-0' : ''}`,
                                        style: {
                                            opacity: 1
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Aarya-Shrivaastava/src/components/Navbar.tsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-6 h-0.5 bg-foreground transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`,
                                        style: {
                                            opacity: 1
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Aarya-Shrivaastava/src/components/Navbar.tsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Aarya-Shrivaastava/src/components/Navbar.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Aarya-Shrivaastava/src/components/Navbar.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Aarya-Shrivaastava/src/components/Navbar.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "glass mt-2 mx-4 rounded-2xl p-4",
                    children: NAV_LINKS.map(({ label, href })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: href,
                            onClick: ()=>setMenuOpen(false),
                            className: "block py-3 px-4 text-foreground opacity-70 hover:opacity-100 hover:bg-red-500/10 rounded-lg transition-all",
                            children: label
                        }, href, false, {
                            fileName: "[project]/Aarya-Shrivaastava/src/components/Navbar.tsx",
                            lineNumber: 139,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Aarya-Shrivaastava/src/components/Navbar.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Aarya-Shrivaastava/src/components/Navbar.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Aarya-Shrivaastava/src/components/Navbar.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(Navbar, "CZGUg2ytN1iDxXwlhuKTp0t/MGw=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Aarya-Shrivaastava/src/components/HeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Aarya-Shrivaastava/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Aarya-Shrivaastava/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const ROLES = [
    'B.Tech CSE Student',
    'C / C++ Developer',
    'Python Programmer',
    'Open Source Contributor',
    'PR & Outreach Lead',
    'ML Enthusiast'
];
function HeroSection() {
    _s();
    const [roleIndex, setRoleIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [displayed, setDisplayed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [typing, setTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [charIndex, setCharIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const current = ROLES[roleIndex];
            if (typing) {
                if (charIndex < current.length) {
                    const t = setTimeout({
                        "HeroSection.useEffect.t": ()=>{
                            setDisplayed(current.slice(0, charIndex + 1));
                            setCharIndex({
                                "HeroSection.useEffect.t": (c)=>c + 1
                            }["HeroSection.useEffect.t"]);
                        }
                    }["HeroSection.useEffect.t"], 60);
                    return ({
                        "HeroSection.useEffect": ()=>clearTimeout(t)
                    })["HeroSection.useEffect"];
                } else {
                    const t = setTimeout({
                        "HeroSection.useEffect.t": ()=>setTyping(false)
                    }["HeroSection.useEffect.t"], 1800);
                    return ({
                        "HeroSection.useEffect": ()=>clearTimeout(t)
                    })["HeroSection.useEffect"];
                }
            } else {
                if (charIndex > 0) {
                    const t = setTimeout({
                        "HeroSection.useEffect.t": ()=>{
                            setDisplayed(current.slice(0, charIndex - 1));
                            setCharIndex({
                                "HeroSection.useEffect.t": (c)=>c - 1
                            }["HeroSection.useEffect.t"]);
                        }
                    }["HeroSection.useEffect.t"], 30);
                    return ({
                        "HeroSection.useEffect": ()=>clearTimeout(t)
                    })["HeroSection.useEffect"];
                } else {
                    setRoleIndex({
                        "HeroSection.useEffect": (r)=>(r + 1) % ROLES.length
                    }["HeroSection.useEffect"]);
                    setTyping(true);
                }
            }
        }
    }["HeroSection.useEffect"], [
        charIndex,
        typing,
        roleIndex
    ]);
    const SOCIAL = [
        {
            name: 'GitHub',
            url: 'https://github.com/AaryaShrivaastava',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5",
                fill: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                }, void 0, false, {
                    fileName: "[project]/Aarya-Shrivaastava/src/components/HeroSection.tsx",
                    lineNumber: 52,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Aarya-Shrivaastava/src/components/HeroSection.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this)
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/aarya-shrivaastava-7b198b2a3',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5",
                fill: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                }, void 0, false, {
                    fileName: "[project]/Aarya-Shrivaastava/src/components/HeroSection.tsx",
                    lineNumber: 61,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Aarya-Shrivaastava/src/components/HeroSection.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this)
        },
        {
            name: 'HackerRank',
            url: 'https://hackerrank.com/profile/aarya_shrivaast2',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5",
                fill: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908a.405.405 0 00-.405-.405H8.2a.405.405 0 00-.405.405v10.359c0 .224.181.405.405.405h1.358c.224 0 .405-.181.405-.405v-4.119h4.074v4.269c0 .142.115.258.258.258h1.498c.141 0 .258-.116.258-.258V7.057a.258.258 0 00-.258-.258h-1.498z"
                }, void 0, false, {
                    fileName: "[project]/Aarya-Shrivaastava/src/components/HeroSection.tsx",
                    lineNumber: 70,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Aarya-Shrivaastava/src/components/HeroSection.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this)
        },
        {
            name: 'Codolio',
            url: 'https://codolio.com/profile/ApexVoyager30',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5",
                fill: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M8.001 2.4A5.6 5.6 0 002.4 8v8a5.6 5.6 0 005.601 5.6h8A5.6 5.6 0 0021.6 16V8A5.6 5.6 0 0016 2.4h-8zm.001 3.2h8a2.4 2.4 0 012.4 2.4v8a2.4 2.4 0 01-2.4 2.4H8.002A2.4 2.4 0 015.6 16V8A2.4 2.4 0 018.002 5.6zM9.6 8a1.6 1.6 0 100 3.2A1.6 1.6 0 009.6 8zm4.8 4.8a1.6 1.6 0 100 3.2 1.6 1.6 0 000-3.2z"
                }, void 0, false, {
                    fileName: "[project]/Aarya-Shrivaastava/src/components/HeroSection.tsx",
                    lineNumber: 79,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Aarya-Shrivaastava/src/components/HeroSection.tsx",
                lineNumber: 78,
                columnNumber: 9
            }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero",
        className: "relative min-h-screen flex flex-col items-center justify-center text-center px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[600px] h-[600px] rounded-full border border-red-500/10 animate-spin-slow"
                    }, void 0, false, {
                        fileName: "[project]/Aarya-Shrivaastava/src/components/HeroSection.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute w-[420px] h-[420px] rounded-full border border-red-500/8"
                    }, void 0, false, {
                        fileName: "[project]/Aarya-Shrivaastava/src/components/HeroSection.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Aarya-Shrivaastava/src/components/HeroSection.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-4xl mx-auto flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-red-500/30 text-xs text-red-400 mb-8 animate-fade-in-up",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-2 h-2 bg-green-400 rounded-full animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/Aarya-Shrivaastava/src/components/HeroSection.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            "Open to Software Internships"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Aarya-Shrivaastava/src/components/HeroSection.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-5xl sm:text-7xl font-black tracking-tight text-foreground mb-4 animate-fade-in-up delay-100",
                        children: [
                            "Aarya",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "gradient-text glow-text",
                                children: "Shrivaastava"
                            }, void 0, false, {
                                fileName: "[project]/Aarya-Shrivaastava/src/components/HeroSection.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Aarya-Shrivaastava/src/components/HeroSection.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-12 flex items-center justify-center mb-6 animate-fade-in-up delay-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xl sm:text-2xl font-medium text-foreground opacity-70 font-mono",
                            children: [
                                displayed,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "animate-blink text-red-400",
                                    children: "|"
                                }, void 0, false, {
                                    fileName: "[project]/Aarya-Shrivaastava/src/components/HeroSection.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Aarya-Shrivaastava/src/components/HeroSection.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Aarya-Shrivaastava/src/components/HeroSection.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-foreground opacity-60 text-base sm:text-lg max-w-2xl mx-auto mb-4 animate-fade-in-up delay-300 leading-relaxed",
                        children: [
                            "Final year CSE student at",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-400 font-semibold opacity-100",
                                children: "VIT Bhopal"
                            }, void 0, false, {
                                fileName: "[project]/Aarya-Shrivaastava/src/components/HeroSection.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            ", crafting efficient & scalable software. HackerRank",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-yellow-400 font-bold opacity-100",
                                children: "4⭐ in C++"
                            }, void 0, false, {
                                fileName: "[project]/Aarya-Shrivaastava/src/components/HeroSection.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            " · Open Source Contributor · AI Club PR Lead."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Aarya-Shrivaastava/src/components/HeroSection.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in-up delay-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#resume",
                                className: "btn-shimmer px-8 py-3 rounded-full text-white font-semibold text-sm shadow-lg animate-pulse-glow",
                                children: "📄 View Resume"
                            }, void 0, false, {
                                fileName: "[project]/Aarya-Shrivaastava/src/components/HeroSection.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#experience",
                                className: "px-8 py-3 rounded-full glass border border-white/20 text-foreground font-semibold text-sm hover:border-red-400 hover:text-red-400 transition-all",
                                children: "Explore Work ↓"
                            }, void 0, false, {
                                fileName: "[project]/Aarya-Shrivaastava/src/components/HeroSection.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Aarya-Shrivaastava/src/components/HeroSection.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-4 animate-fade-in-up delay-600",
                        children: SOCIAL.map(({ name, url, icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                title: name,
                                className: "w-11 h-11 flex items-center justify-center rounded-full glass border border-white/15 text-foreground opacity-60 hover:opacity-100 hover:border-red-400 hover:text-red-400 hover:bg-red-500/10 transition-all hover:scale-110 hover:-translate-y-1",
                                children: icon
                            }, name, false, {
                                fileName: "[project]/Aarya-Shrivaastava/src/components/HeroSection.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Aarya-Shrivaastava/src/components/HeroSection.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Aarya-Shrivaastava/src/components/HeroSection.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground opacity-40 text-xs animate-float",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "scroll"
                    }, void 0, false, {
                        fileName: "[project]/Aarya-Shrivaastava/src/components/HeroSection.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-10 bg-gradient-to-b from-red-400 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/Aarya-Shrivaastava/src/components/HeroSection.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Aarya-Shrivaastava/src/components/HeroSection.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Aarya-Shrivaastava/src/components/HeroSection.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_s(HeroSection, "wfn/BD/Dum8stBjf9EtKl3YE8pE=");
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Aarya-Shrivaastava/src/hooks/useReveal.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useReveal",
    ()=>useReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Aarya-Shrivaastava/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useReveal() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useReveal.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const observer = new IntersectionObserver({
                "useReveal.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        el.classList.add('visible');
                        observer.unobserve(el);
                    }
                }
            }["useReveal.useEffect"], {
                threshold: 0.15
            });
            observer.observe(el);
            return ({
                "useReveal.useEffect": ()=>observer.disconnect()
            })["useReveal.useEffect"];
        }
    }["useReveal.useEffect"], []);
    return ref;
}
_s(useReveal, "8uVE59eA/r6b92xF80p7sH8rXLk=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Aarya-Shrivaastava/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Aarya-Shrivaastava/src/hooks/useReveal.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const ABOUT_STATS = [
    {
        label: 'Year',
        value: 'Final Year'
    },
    {
        label: 'HackerRank',
        value: '4⭐ C++'
    },
    {
        label: 'Open Source',
        value: '4+ Programs'
    },
    {
        label: 'Clubs',
        value: '3 Active'
    }
];
function AboutSection() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"])();
    const statsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "py-28 px-6 section-bg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: '896px',
                margin: '0 auto',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: ref,
                    className: "reveal flex flex-col items-center w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-400 font-mono text-sm mb-3 tracking-widest uppercase",
                            children: "About Me"
                        }, void 0, false, {
                            fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl sm:text-5xl font-black text-foreground mb-8",
                            children: [
                                "Building the ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "gradient-text",
                                    children: "Future"
                                }, void 0, false, {
                                    fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
                                    lineNumber: 22,
                                    columnNumber: 26
                                }, this),
                                ",",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
                                    lineNumber: 22,
                                    columnNumber: 72
                                }, this),
                                "One Line at a Time"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: 'var(--glass)',
                                border: '1px solid rgba(229,62,62,0.2)',
                                backdropFilter: 'blur(20px)',
                                WebkitBackdropFilter: 'blur(20px)',
                                borderRadius: '24px',
                                padding: '2.5rem',
                                width: '100%',
                                maxWidth: '800px',
                                marginBottom: '2rem',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 text-foreground opacity-75 leading-relaxed text-justify",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "I'm a final year",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-foreground opacity-100 font-semibold",
                                                children: "B.Tech CSE student at VIT Bhopal"
                                            }, void 0, false, {
                                                fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
                                                lineNumber: 29,
                                                columnNumber: 17
                                            }, this),
                                            ", driven by a passion for crafting efficient, scalable software that makes a real difference."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
                                        lineNumber: 27,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Proficient in",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-400 font-semibold opacity-100",
                                                children: "C, C++, Python, and OOP"
                                            }, void 0, false, {
                                                fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
                                                lineNumber: 34,
                                                columnNumber: 17
                                            }, this),
                                            " — with a",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-yellow-400 font-bold opacity-100",
                                                children: "4⭐ HackerRank rating in C++"
                                            }, void 0, false, {
                                                fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
                                                lineNumber: 35,
                                                columnNumber: 17
                                            }, this),
                                            " — I enjoy tackling complex algorithmic challenges and translating them into clean, maintainable code."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
                                        lineNumber: 32,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Beyond the classroom, I lead as",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-400 font-semibold opacity-100",
                                                children: "PR & Outreach Lead of the AI Club"
                                            }, void 0, false, {
                                                fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
                                                lineNumber: 40,
                                                columnNumber: 17
                                            }, this),
                                            ", manage finances at",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-400 font-semibold opacity-100",
                                                children: "E-Cell"
                                            }, void 0, false, {
                                                fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
                                                lineNumber: 42,
                                                columnNumber: 17
                                            }, this),
                                            ", and coordinate community events with ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-400 font-semibold opacity-100",
                                                children: "NSS"
                                            }, void 0, false, {
                                                fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
                                                lineNumber: 43,
                                                columnNumber: 29
                                            }, this),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Actively contributing to",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-green-400 font-semibold opacity-100",
                                                children: "SWOC, GirlScript Summer of Code, Hacktoberfest"
                                            }, void 0, false, {
                                                fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
                                                lineNumber: 47,
                                                columnNumber: 17
                                            }, this),
                                            ' ',
                                            "and seeking software development internships to grow further."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: statsRef,
                    className: "reveal delay-200 mt-6 w-full max-w-3xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 sm:grid-cols-4 gap-6",
                        children: ABOUT_STATS.map(({ label, value })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-3d glass rounded-2xl p-6 border border-red-500/20 text-center group hover:border-red-400/50 transition-all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-black gradient-text mb-1 group-hover:scale-110 transition-transform",
                                        children: value
                                    }, void 0, false, {
                                        fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
                                        lineNumber: 62,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-foreground opacity-50 text-xs uppercase tracking-widest",
                                        children: label
                                    }, void 0, false, {
                                        fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
                                        lineNumber: 65,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, label, true, {
                                fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
                                lineNumber: 58,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center gap-6 mt-12 reveal delay-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://github.com/AaryaShrivaastava",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            title: "GitHub",
                            className: "w-12 h-12 flex items-center justify-center rounded-full glass border border-white/15 text-foreground opacity-60 hover:opacity-100 hover:border-red-400 hover:bg-red-500/10 transition-all hover:scale-110 hover:-translate-y-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5",
                                fill: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                                }, void 0, false, {
                                    fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://www.linkedin.com/in/aarya-shrivaastava-7b198b2a3",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            title: "LinkedIn",
                            className: "w-12 h-12 flex items-center justify-center rounded-full glass border border-white/15 text-foreground opacity-60 hover:opacity-100 hover:border-red-400 hover:bg-red-500/10 transition-all hover:scale-110 hover:-translate-y-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5",
                                fill: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                }, void 0, false, {
                                    fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://codolio.com/profile/ApexVoyager30",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            title: "Codolio",
                            className: "w-12 h-12 flex items-center justify-center rounded-full glass border border-white/15 text-foreground opacity-60 hover:opacity-100 hover:border-red-400 hover:bg-red-500/10 transition-all hover:scale-110 hover:-translate-y-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5",
                                fill: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M8.001 2.4A5.6 5.6 0 002.4 8v8a5.6 5.6 0 005.601 5.6h8A5.6 5.6 0 0021.6 16V8A5.6 5.6 0 0016 2.4h-8zm.001 3.2h8a2.4 2.4 0 012.4 2.4v8a2.4 2.4 0 01-2.4 2.4H8.002A2.4 2.4 0 015.6 16V8A2.4 2.4 0 018.002 5.6zM9.6 8a1.6 1.6 0 100 3.2A1.6 1.6 0 009.6 8zm4.8 4.8a1.6 1.6 0 100 3.2 1.6 1.6 0 000-3.2z"
                                }, void 0, false, {
                                    fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://hackerrank.com/profile/aarya_shrivaast2",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            title: "HackerRank",
                            className: "w-12 h-12 flex items-center justify-center rounded-full glass border border-white/15 text-foreground opacity-60 hover:opacity-100 hover:border-red-400 hover:bg-red-500/10 transition-all hover:scale-110 hover:-translate-y-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5",
                                fill: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908a.405.405 0 00-.405-.405H8.2a.405.405 0 00-.405.405v10.359c0 .224.181.405.405.405h1.358c.224 0 .405-.181.405-.405v-4.119h4.074v4.269c0 .142.115.258.258.258h1.498c.141 0 .258-.116.258-.258V7.057a.258.258 0 00-.258-.258h-1.498z"
                                }, void 0, false, {
                                    fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(AboutSection, "/Zw88a5HXm457uxzxMQNiD5Dfz4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"]
    ];
});
_c = AboutSection;
var _c;
__turbopack_context__.k.register(_c, "AboutSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Aarya-Shrivaastava/src/components/RevealCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RevealCard",
    ()=>RevealCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Aarya-Shrivaastava/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Aarya-Shrivaastava/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function RevealCard({ children, className = '', delay = 0 }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RevealCard.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const observer = new IntersectionObserver({
                "RevealCard.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setTimeout({
                            "RevealCard.useEffect": ()=>el.classList.add('visible')
                        }["RevealCard.useEffect"], delay);
                        observer.unobserve(el);
                    }
                }
            }["RevealCard.useEffect"], {
                threshold: 0.1
            });
            observer.observe(el);
            return ({
                "RevealCard.useEffect": ()=>observer.disconnect()
            })["RevealCard.useEffect"];
        }
    }["RevealCard.useEffect"], [
        delay
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `reveal ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/Aarya-Shrivaastava/src/components/RevealCard.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(RevealCard, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = RevealCard;
var _c;
__turbopack_context__.k.register(_c, "RevealCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Aarya-Shrivaastava/src/components/SkillsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SkillsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Aarya-Shrivaastava/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Aarya-Shrivaastava/src/hooks/useReveal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$components$2f$RevealCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Aarya-Shrivaastava/src/components/RevealCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const SKILLS = {
    'Languages': [
        'C',
        'C++',
        'Python',
        'JavaScript',
        'TypeScript',
        'SQL'
    ],
    'Core CS': [
        'Data Structures',
        'Algorithms',
        'OOP',
        'DBMS',
        'OS',
        'Computer Networking'
    ],
    'Web & Tools': [
        'React',
        'Next.js',
        'Git',
        'GitHub',
        'Firebase',
        'Linux'
    ],
    'AI / ML': [
        'Machine Learning',
        'AI Fundamentals',
        'Python for Data Science',
        'Scikit-learn'
    ],
    'Soft Skills': [
        'PR & Outreach',
        'Event Management',
        'Public Speaking',
        'Finance Planning',
        'Team Leadership'
    ]
};
const CATEGORY_ICONS = {
    'Languages': '⚡',
    'Core CS': '🧠',
    'Web & Tools': '🌐',
    'AI / ML': '🤖',
    'Soft Skills': '🤝'
};
function SkillsSection() {
    _s();
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "skills",
        className: "py-28 px-6 section-bg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto flex flex-col items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: headerRef,
                    className: "reveal section-header text-center w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-400 font-mono text-sm mb-3 tracking-widest uppercase",
                            children: "What I Know"
                        }, void 0, false, {
                            fileName: "[project]/Aarya-Shrivaastava/src/components/SkillsSection.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl sm:text-5xl font-black text-foreground",
                            children: [
                                "Skills & ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "gradient-text",
                                    children: "Expertise"
                                }, void 0, false, {
                                    fileName: "[project]/Aarya-Shrivaastava/src/components/SkillsSection.tsx",
                                    lineNumber: 30,
                                    columnNumber: 22
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Aarya-Shrivaastava/src/components/SkillsSection.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-foreground opacity-55 mt-4 max-w-xl mx-auto",
                            children: "A blend of programming fundamentals, modern tooling, and leadership skills built across coursework, open-source, and clubs."
                        }, void 0, false, {
                            fileName: "[project]/Aarya-Shrivaastava/src/components/SkillsSection.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Aarya-Shrivaastava/src/components/SkillsSection.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-10",
                    children: [
                        Object.entries(SKILLS).map(([category, skills], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$components$2f$RevealCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RevealCard"], {
                                delay: i * 100,
                                className: "card-3d glass rounded-2xl p-8 sm:p-10 border border-red-500/20 text-center flex flex-col items-center justify-between min-h-[250px] h-full overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center mb-5 w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-3xl mb-3",
                                                children: CATEGORY_ICONS[category]
                                            }, void 0, false, {
                                                fileName: "[project]/Aarya-Shrivaastava/src/components/SkillsSection.tsx",
                                                lineNumber: 45,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-foreground font-bold text-lg",
                                                children: category
                                            }, void 0, false, {
                                                fileName: "[project]/Aarya-Shrivaastava/src/components/SkillsSection.tsx",
                                                lineNumber: 46,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Aarya-Shrivaastava/src/components/SkillsSection.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap justify-center gap-2.5 mt-auto",
                                        children: skills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "skill-pill px-3.5 py-1.5 rounded-full text-xs text-foreground font-semibold cursor-default",
                                                children: skill
                                            }, skill, false, {
                                                fileName: "[project]/Aarya-Shrivaastava/src/components/SkillsSection.tsx",
                                                lineNumber: 50,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Aarya-Shrivaastava/src/components/SkillsSection.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, category, true, {
                                fileName: "[project]/Aarya-Shrivaastava/src/components/SkillsSection.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$components$2f$RevealCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RevealCard"], {
                            delay: 600,
                            className: "card-3d glass rounded-2xl p-8 sm:p-10 border border-yellow-500/30 flex flex-col items-center justify-center text-center col-span-full lg:col-span-1 min-h-[250px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-1 mb-3 justify-center animate-float",
                                    children: [
                                        ...Array(4)
                                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-6 h-6 text-yellow-400 fill-current",
                                            viewBox: "0 0 20 20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            }, void 0, false, {
                                                fileName: "[project]/Aarya-Shrivaastava/src/components/SkillsSection.tsx",
                                                lineNumber: 66,
                                                columnNumber: 19
                                            }, this)
                                        }, i, false, {
                                            fileName: "[project]/Aarya-Shrivaastava/src/components/SkillsSection.tsx",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Aarya-Shrivaastava/src/components/SkillsSection.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-foreground font-bold text-lg mb-1",
                                    children: "HackerRank 4★ C++"
                                }, void 0, false, {
                                    fileName: "[project]/Aarya-Shrivaastava/src/components/SkillsSection.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-foreground opacity-55 text-sm mb-5",
                                    children: "Ranked among top competitive programmers"
                                }, void 0, false, {
                                    fileName: "[project]/Aarya-Shrivaastava/src/components/SkillsSection.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://hackerrank.com/profile/aarya_shrivaast2",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    title: "HackerRank Profile",
                                    className: "w-11 h-11 flex items-center justify-center rounded-full glass border border-yellow-500/40 text-yellow-400 hover:text-white hover:border-yellow-400 hover:bg-yellow-500/10 transition-all hover:scale-110",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5",
                                        fill: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908a.405.405 0 00-.405-.405H8.2a.405.405 0 00-.405.405v10.359c0 .224.181.405.405.405h1.358c.224 0 .405-.181.405-.405v-4.119h4.074v4.269c0 .142.115.258.258.258h1.498c.141 0 .258-.116.258-.258V7.057a.258.258 0 00-.258-.258h-1.498z"
                                        }, void 0, false, {
                                            fileName: "[project]/Aarya-Shrivaastava/src/components/SkillsSection.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Aarya-Shrivaastava/src/components/SkillsSection.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Aarya-Shrivaastava/src/components/SkillsSection.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Aarya-Shrivaastava/src/components/SkillsSection.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Aarya-Shrivaastava/src/components/SkillsSection.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Aarya-Shrivaastava/src/components/SkillsSection.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Aarya-Shrivaastava/src/components/SkillsSection.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(SkillsSection, "ZdaMbmGDFek5NLzi3HCbAoPp5f4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"]
    ];
});
_c = SkillsSection;
var _c;
__turbopack_context__.k.register(_c, "SkillsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Aarya-Shrivaastava/src/components/ExperienceSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExperienceSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Aarya-Shrivaastava/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Aarya-Shrivaastava/src/hooks/useReveal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$components$2f$RevealCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Aarya-Shrivaastava/src/components/RevealCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const EXPERIENCES = [
    {
        role: 'Technology Intern',
        org: 'Schoolnet India Limited',
        period: 'May 2025 – Jun 2025',
        duration: '2 months',
        description: 'Analyzed the technical architecture of a K-Class platform serving 1M+ students. Documented scalable development practices and backend workflows using C++ and Python.',
        tags: [
            'C++',
            'Python',
            'Backend',
            'Architecture'
        ],
        icon: '💼',
        highlight: true
    },
    {
        role: 'PR & Outreach Lead',
        org: 'AI Club – VIT Bhopal',
        period: 'Apr 2025 – Present',
        duration: '1 yr 3 mo',
        description: 'Driving member engagement, forging partnerships, and promoting hands-on AI workshops and hackathons across the university community.',
        tags: [
            'Leadership',
            'AI',
            'Community',
            'Events'
        ],
        icon: '🤖',
        highlight: true
    },
    {
        role: 'Finance & Sponsorship Team Member',
        org: 'E-Cell – VIT Bhopal',
        period: 'Mar 2025 – Present',
        duration: '1 yr 4 mo',
        description: 'Planning budgets, forecasting expenses, and ensuring the financial sustainability of entrepreneurial events and startup competitions.',
        tags: [
            'Finance',
            'Sponsorship',
            'Entrepreneurship'
        ],
        icon: '💰'
    },
    {
        role: 'Open Source Contributor',
        org: 'Social Winter of Code (SWOC)',
        period: 'Jan 2025 – Present',
        duration: '1 yr 6 mo',
        description: 'Actively contributing to open-source projects during SWOC, collaborating with developers globally to ship meaningful code.',
        tags: [
            'Open Source',
            'Collaboration',
            'Git'
        ],
        icon: '🌐'
    },
    {
        role: 'Open Source Contributor',
        org: 'GirlScript Summer of Code',
        period: 'Sep 2024 – Nov 2024',
        duration: '3 months',
        description: 'Contributed to multiple repositories during GirlScript Summer of Code, enhancing features and fixing bugs.',
        tags: [
            'Open Source',
            'GSSoC',
            'Community'
        ],
        icon: '👩‍💻'
    },
    {
        role: 'Hacktoberfest Contributor',
        org: 'Hacktoberfest',
        period: 'Oct 2024 – Nov 2024',
        duration: '2 months',
        description: 'Participated in Hacktoberfest, making quality pull requests to open-source projects and earning the official badge.',
        tags: [
            'Open Source',
            'Hacktoberfest',
            'Git'
        ],
        icon: '🎃'
    },
    {
        role: 'Event Management Team',
        org: 'NSS – VIT Bhopal',
        period: 'Sep 2024 – Present',
        duration: '1 yr 10 mo',
        description: 'Organizing social-impact initiatives, coordinating logistics, and fostering community growth across NSS events.',
        tags: [
            'Events',
            'Community',
            'Social Impact'
        ],
        icon: '🌱'
    },
    {
        role: 'Podcast Team Member',
        org: 'E-Cell – VIT Bhopal',
        period: 'Nov 2024 – Mar 2025',
        duration: '5 months',
        description: "Podcast host and team member at ECell VIT Bhopal University's Podcast Team, interviewing entrepreneurs and startup founders.",
        tags: [
            'Podcast',
            'Entrepreneurship',
            'Communication'
        ],
        icon: '🎙️'
    }
];
function ExperienceSection() {
    _s();
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "experience",
        className: "pt-36 pb-28 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto flex flex-col items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: headerRef,
                    className: "reveal section-header text-center w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-400 font-mono text-sm mb-3 tracking-widest uppercase",
                            children: "My Journey"
                        }, void 0, false, {
                            fileName: "[project]/Aarya-Shrivaastava/src/components/ExperienceSection.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl sm:text-5xl font-black text-foreground",
                            children: [
                                "Experience & ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "gradient-text",
                                    children: "Activities"
                                }, void 0, false, {
                                    fileName: "[project]/Aarya-Shrivaastava/src/components/ExperienceSection.tsx",
                                    lineNumber: 110,
                                    columnNumber: 26
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Aarya-Shrivaastava/src/components/ExperienceSection.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-foreground opacity-55 mt-4 max-w-xl mx-auto",
                            children: "From internships to open-source sprints, leadership roles to podcast hosting — here's what I've been up to."
                        }, void 0, false, {
                            fileName: "[project]/Aarya-Shrivaastava/src/components/ExperienceSection.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Aarya-Shrivaastava/src/components/ExperienceSection.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 gap-8 w-full mt-10",
                    children: EXPERIENCES.map((exp, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$components$2f$RevealCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RevealCard"], {
                            delay: Math.min(i * 80, 400),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `experience-card group glass rounded-2xl p-8 sm:p-10 border transition-all duration-300 cursor-pointer text-center flex flex-col items-center justify-center h-full ${exp.highlight ? 'border-red-500/40 glow-rose' : 'border-white/10'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-3xl mb-3",
                                        children: exp.icon
                                    }, void 0, false, {
                                        fileName: "[project]/Aarya-Shrivaastava/src/components/ExperienceSection.tsx",
                                        lineNumber: 121,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-foreground font-bold text-lg sm:text-xl",
                                        children: exp.role
                                    }, void 0, false, {
                                        fileName: "[project]/Aarya-Shrivaastava/src/components/ExperienceSection.tsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "gradient-text font-semibold text-sm mt-1",
                                        children: exp.org
                                    }, void 0, false, {
                                        fileName: "[project]/Aarya-Shrivaastava/src/components/ExperienceSection.tsx",
                                        lineNumber: 123,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "experience-card-content w-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "experience-card-inner",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pt-5 mt-5 border-t border-white/10 flex flex-col items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-4 text-xs text-foreground opacity-50 justify-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: exp.period
                                                            }, void 0, false, {
                                                                fileName: "[project]/Aarya-Shrivaastava/src/components/ExperienceSection.tsx",
                                                                lineNumber: 129,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Aarya-Shrivaastava/src/components/ExperienceSection.tsx",
                                                                lineNumber: 130,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-red-400 opacity-100 font-medium",
                                                                children: exp.duration
                                                            }, void 0, false, {
                                                                fileName: "[project]/Aarya-Shrivaastava/src/components/ExperienceSection.tsx",
                                                                lineNumber: 131,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Aarya-Shrivaastava/src/components/ExperienceSection.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-foreground opacity-65 text-sm leading-relaxed max-w-xl mx-auto",
                                                        children: exp.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/Aarya-Shrivaastava/src/components/ExperienceSection.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap justify-center gap-2 mt-2",
                                                        children: exp.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs px-2.5 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20",
                                                                children: tag
                                                            }, tag, false, {
                                                                fileName: "[project]/Aarya-Shrivaastava/src/components/ExperienceSection.tsx",
                                                                lineNumber: 136,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Aarya-Shrivaastava/src/components/ExperienceSection.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Aarya-Shrivaastava/src/components/ExperienceSection.tsx",
                                                lineNumber: 127,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Aarya-Shrivaastava/src/components/ExperienceSection.tsx",
                                            lineNumber: 126,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Aarya-Shrivaastava/src/components/ExperienceSection.tsx",
                                        lineNumber: 125,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Aarya-Shrivaastava/src/components/ExperienceSection.tsx",
                                lineNumber: 120,
                                columnNumber: 15
                            }, this)
                        }, i, false, {
                            fileName: "[project]/Aarya-Shrivaastava/src/components/ExperienceSection.tsx",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Aarya-Shrivaastava/src/components/ExperienceSection.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Aarya-Shrivaastava/src/components/ExperienceSection.tsx",
            lineNumber: 106,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Aarya-Shrivaastava/src/components/ExperienceSection.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_s(ExperienceSection, "ZdaMbmGDFek5NLzi3HCbAoPp5f4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"]
    ];
});
_c = ExperienceSection;
var _c;
__turbopack_context__.k.register(_c, "ExperienceSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Aarya-Shrivaastava/src/components/CertificationsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CertificationsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Aarya-Shrivaastava/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Aarya-Shrivaastava/src/hooks/useReveal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$components$2f$RevealCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Aarya-Shrivaastava/src/components/RevealCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const CERTS = [
    {
        title: 'Marketing Analytics',
        issuer: 'IIT Kharagpur | NPTEL | 99% | Top 1% Topper | Elite + Gold',
        icon: '📊'
    },
    {
        title: 'Introduction to Machine Learning',
        issuer: 'IIT Madras | NPTEL | 71% | Elite',
        icon: '🎓'
    },
    {
        title: 'Fundamentals of AI and ML',
        issuer: 'Professional Certification by VITyarthi',
        icon: '🤖'
    },
    {
        title: 'Python Essentials',
        issuer: 'Professional Certification by VITyarthi',
        icon: '🐍'
    },
    {
        title: 'Python Programming Internship',
        issuer: 'Internship Certificate',
        icon: '💼'
    }
];
function CertificationsSection() {
    _s();
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "certifications",
        className: "py-28 px-6 section-bg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto flex flex-col items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: headerRef,
                    className: "reveal section-header text-center w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-400 font-mono text-sm mb-3 tracking-widest uppercase",
                            children: "Credentials"
                        }, void 0, false, {
                            fileName: "[project]/Aarya-Shrivaastava/src/components/CertificationsSection.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl sm:text-5xl font-black text-foreground",
                            children: [
                                "Certifications & ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "gradient-text",
                                    children: "Learning"
                                }, void 0, false, {
                                    fileName: "[project]/Aarya-Shrivaastava/src/components/CertificationsSection.tsx",
                                    lineNumber: 43,
                                    columnNumber: 30
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Aarya-Shrivaastava/src/components/CertificationsSection.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-foreground opacity-55 mt-4 max-w-xl mx-auto",
                            children: "Continuous learning from premier institutions — IIT Madras, IIT Kharagpur, and industry-recognized programs."
                        }, void 0, false, {
                            fileName: "[project]/Aarya-Shrivaastava/src/components/CertificationsSection.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Aarya-Shrivaastava/src/components/CertificationsSection.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-10",
                    children: CERTS.map((cert, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$components$2f$RevealCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RevealCard"], {
                            delay: i * 100,
                            className: "card-3d glass rounded-2xl p-8 border border-red-500/20 group relative overflow-hidden text-center flex flex-col items-center justify-center min-h-[160px] h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-white/0 group-hover:bg-white/[0.02] transition-all duration-500 rounded-2xl"
                                }, void 0, false, {
                                    fileName: "[project]/Aarya-Shrivaastava/src/components/CertificationsSection.tsx",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 flex flex-col items-center justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-3xl mb-3",
                                            children: cert.icon
                                        }, void 0, false, {
                                            fileName: "[project]/Aarya-Shrivaastava/src/components/CertificationsSection.tsx",
                                            lineNumber: 59,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-foreground font-bold text-base mb-2 leading-snug",
                                            children: cert.title
                                        }, void 0, false, {
                                            fileName: "[project]/Aarya-Shrivaastava/src/components/CertificationsSection.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-400 text-sm font-medium",
                                            children: cert.issuer
                                        }, void 0, false, {
                                            fileName: "[project]/Aarya-Shrivaastava/src/components/CertificationsSection.tsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Aarya-Shrivaastava/src/components/CertificationsSection.tsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/Aarya-Shrivaastava/src/components/CertificationsSection.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Aarya-Shrivaastava/src/components/CertificationsSection.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Aarya-Shrivaastava/src/components/CertificationsSection.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Aarya-Shrivaastava/src/components/CertificationsSection.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(CertificationsSection, "ZdaMbmGDFek5NLzi3HCbAoPp5f4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"]
    ];
});
_c = CertificationsSection;
var _c;
__turbopack_context__.k.register(_c, "CertificationsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Aarya-Shrivaastava/src/components/ResumeSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResumeSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Aarya-Shrivaastava/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Aarya-Shrivaastava/src/hooks/useReveal.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
// 🔁 Replace this URL with your actual Google Drive share link
const RESUME_DRIVE_URL = 'https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing';
function ResumeSection() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "resume",
        className: "py-32 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto text-center flex flex-col items-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ref,
                className: "reveal w-full flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-400 font-mono text-sm mb-3 tracking-widest uppercase",
                        children: "Get In Touch"
                    }, void 0, false, {
                        fileName: "[project]/Aarya-Shrivaastava/src/components/ResumeSection.tsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl sm:text-5xl font-black text-foreground mb-8",
                        children: [
                            "My ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "gradient-text",
                                children: "Resume"
                            }, void 0, false, {
                                fileName: "[project]/Aarya-Shrivaastava/src/components/ResumeSection.tsx",
                                lineNumber: 16,
                                columnNumber: 16
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Aarya-Shrivaastava/src/components/ResumeSection.tsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-foreground opacity-60 text-base leading-relaxed mb-12 max-w-xl mx-auto",
                        children: "Want to know more about my experience and skills? View my full resume or reach out directly — I'd love to connect!"
                    }, void 0, false, {
                        fileName: "[project]/Aarya-Shrivaastava/src/components/ResumeSection.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass rounded-3xl p-12 sm:p-16 border border-red-500/25 shadow-xl relative overflow-hidden mb-12 w-full max-w-3xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-12 -right-12 w-40 h-40 rounded-full bg-red-500/8 blur-2xl"
                            }, void 0, false, {
                                fileName: "[project]/Aarya-Shrivaastava/src/components/ResumeSection.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-red-400/8 blur-2xl"
                            }, void 0, false, {
                                fileName: "[project]/Aarya-Shrivaastava/src/components/ResumeSection.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 flex flex-col items-center md:items-start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-foreground font-bold text-3xl mb-2",
                                                children: "Aarya Shrivaastava"
                                            }, void 0, false, {
                                                fileName: "[project]/Aarya-Shrivaastava/src/components/ResumeSection.tsx",
                                                lineNumber: 30,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-red-400 text-sm font-semibold mb-8",
                                                children: "B.Tech CSE · VIT Bhopal · Final Year"
                                            }, void 0, false, {
                                                fileName: "[project]/Aarya-Shrivaastava/src/components/ResumeSection.tsx",
                                                lineNumber: 31,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap items-center justify-center md:justify-start gap-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: RESUME_DRIVE_URL,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "btn-shimmer px-10 py-3.5 rounded-full text-white font-bold text-sm inline-flex items-center gap-2 cursor-pointer shadow-lg",
                                                    children: [
                                                        "Resume",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-4 h-4",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: 2,
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                d: "M14 5l7 7m0 0l-7 7m7-7H3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Aarya-Shrivaastava/src/components/ResumeSection.tsx",
                                                                lineNumber: 42,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Aarya-Shrivaastava/src/components/ResumeSection.tsx",
                                                            lineNumber: 41,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Aarya-Shrivaastava/src/components/ResumeSection.tsx",
                                                    lineNumber: 34,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Aarya-Shrivaastava/src/components/ResumeSection.tsx",
                                                lineNumber: 33,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Aarya-Shrivaastava/src/components/ResumeSection.tsx",
                                        lineNumber: 29,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-24 h-24 rounded-2xl btn-shimmer flex items-center justify-center text-white order-first md:order-last animate-float shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-10 h-10",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            }, void 0, false, {
                                                fileName: "[project]/Aarya-Shrivaastava/src/components/ResumeSection.tsx",
                                                lineNumber: 51,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Aarya-Shrivaastava/src/components/ResumeSection.tsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Aarya-Shrivaastava/src/components/ResumeSection.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Aarya-Shrivaastava/src/components/ResumeSection.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Aarya-Shrivaastava/src/components/ResumeSection.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "mailto:aarya.shrivaastava1026@gmail.com",
                                title: "Email Me",
                                className: "w-12 h-12 flex items-center justify-center rounded-full glass border border-white/15 text-foreground opacity-60 hover:opacity-100 hover:border-red-400 hover:bg-red-500/10 transition-all hover:scale-110 hover:-translate-y-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    }, void 0, false, {
                                        fileName: "[project]/Aarya-Shrivaastava/src/components/ResumeSection.tsx",
                                        lineNumber: 65,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Aarya-Shrivaastava/src/components/ResumeSection.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Aarya-Shrivaastava/src/components/ResumeSection.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://www.linkedin.com/in/aarya-shrivaastava-7b198b2a3",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                title: "LinkedIn",
                                className: "w-12 h-12 flex items-center justify-center rounded-full glass border border-white/15 text-foreground opacity-60 hover:opacity-100 hover:border-red-400 hover:bg-red-500/10 transition-all hover:scale-110 hover:-translate-y-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                    }, void 0, false, {
                                        fileName: "[project]/Aarya-Shrivaastava/src/components/ResumeSection.tsx",
                                        lineNumber: 76,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Aarya-Shrivaastava/src/components/ResumeSection.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Aarya-Shrivaastava/src/components/ResumeSection.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://github.com/AaryaShrivaastava",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                title: "GitHub",
                                className: "w-12 h-12 flex items-center justify-center rounded-full glass border border-white/15 text-foreground opacity-60 hover:opacity-100 hover:border-red-400 hover:bg-red-500/10 transition-all hover:scale-110 hover:-translate-y-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                                    }, void 0, false, {
                                        fileName: "[project]/Aarya-Shrivaastava/src/components/ResumeSection.tsx",
                                        lineNumber: 87,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Aarya-Shrivaastava/src/components/ResumeSection.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Aarya-Shrivaastava/src/components/ResumeSection.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Aarya-Shrivaastava/src/components/ResumeSection.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Aarya-Shrivaastava/src/components/ResumeSection.tsx",
                lineNumber: 13,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Aarya-Shrivaastava/src/components/ResumeSection.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Aarya-Shrivaastava/src/components/ResumeSection.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(ResumeSection, "R6lsF/5GV6UhDn/m6681hjVhyFE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"]
    ];
});
_c = ResumeSection;
var _c;
__turbopack_context__.k.register(_c, "ResumeSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Aarya-Shrivaastava/src/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Aarya-Shrivaastava/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Footer() {
    const year = new Date().getFullYear();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "py-20 px-8",
        style: {
            borderTop: '1px solid rgba(255,255,255,0.08)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto flex flex-col items-center justify-center gap-6 text-sm text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2.5 justify-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8 h-8 rounded-lg btn-shimmer flex items-center justify-center text-white font-bold text-xs",
                            children: "AS"
                        }, void 0, false, {
                            fileName: "[project]/Aarya-Shrivaastava/src/components/Footer.tsx",
                            lineNumber: 7,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-foreground font-bold tracking-wider",
                            children: "Aarya Shrivaastava"
                        }, void 0, false, {
                            fileName: "[project]/Aarya-Shrivaastava/src/components/Footer.tsx",
                            lineNumber: 10,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Aarya-Shrivaastava/src/components/Footer.tsx",
                    lineNumber: 6,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-foreground opacity-50",
                    children: [
                        "Built with ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-red-400 font-semibold opacity-100",
                            children: "Next.js"
                        }, void 0, false, {
                            fileName: "[project]/Aarya-Shrivaastava/src/components/Footer.tsx",
                            lineNumber: 13,
                            columnNumber: 22
                        }, this),
                        "& WebGL shaders."
                    ]
                }, void 0, true, {
                    fileName: "[project]/Aarya-Shrivaastava/src/components/Footer.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4 justify-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://github.com/AaryaShrivaastava",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            title: "GitHub",
                            className: "w-10 h-10 flex items-center justify-center rounded-full glass border border-white/15 text-foreground opacity-60 hover:opacity-100 hover:border-red-400 hover:bg-red-500/10 transition-all hover:scale-110",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5",
                                fill: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                                }, void 0, false, {
                                    fileName: "[project]/Aarya-Shrivaastava/src/components/Footer.tsx",
                                    lineNumber: 24,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Aarya-Shrivaastava/src/components/Footer.tsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Aarya-Shrivaastava/src/components/Footer.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://codolio.com/profile/ApexVoyager30",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            title: "Codolio",
                            className: "w-10 h-10 flex items-center justify-center rounded-full glass border border-white/15 text-foreground opacity-60 hover:opacity-100 hover:border-red-400 hover:bg-red-500/10 transition-all hover:scale-110",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5",
                                fill: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M8.001 2.4A5.6 5.6 0 002.4 8v8a5.6 5.6 0 005.601 5.6h8A5.6 5.6 0 0021.6 16V8A5.6 5.6 0 0016 2.4h-8zm.001 3.2h8a2.4 2.4 0 012.4 2.4v8a2.4 2.4 0 01-2.4 2.4H8.002A2.4 2.4 0 015.6 16V8A2.4 2.4 0 018.002 5.6zM9.6 8a1.6 1.6 0 100 3.2A1.6 1.6 0 009.6 8zm4.8 4.8a1.6 1.6 0 100 3.2 1.6 1.6 0 000-3.2z"
                                }, void 0, false, {
                                    fileName: "[project]/Aarya-Shrivaastava/src/components/Footer.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Aarya-Shrivaastava/src/components/Footer.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Aarya-Shrivaastava/src/components/Footer.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://www.linkedin.com/in/aarya-shrivaastava-7b198b2a3",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            title: "LinkedIn",
                            className: "w-10 h-10 flex items-center justify-center rounded-full glass border border-white/15 text-foreground opacity-60 hover:opacity-100 hover:border-red-400 hover:bg-red-500/10 transition-all hover:scale-110",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5",
                                fill: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                }, void 0, false, {
                                    fileName: "[project]/Aarya-Shrivaastava/src/components/Footer.tsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Aarya-Shrivaastava/src/components/Footer.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Aarya-Shrivaastava/src/components/Footer.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Aarya-Shrivaastava/src/components/Footer.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-foreground opacity-35 text-xs",
                    children: [
                        "© ",
                        year,
                        " Aarya Shrivaastava. All rights reserved."
                    ]
                }, void 0, true, {
                    fileName: "[project]/Aarya-Shrivaastava/src/components/Footer.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Aarya-Shrivaastava/src/components/Footer.tsx",
            lineNumber: 5,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Aarya-Shrivaastava/src/components/Footer.tsx",
        lineNumber: 4,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Aarya-Shrivaastava/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Aarya-Shrivaastava/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Aarya-Shrivaastava/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$components$2f$ui$2f$neural$2d$noise$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Aarya-Shrivaastava/src/components/ui/neural-noise.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Aarya-Shrivaastava/src/components/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Aarya-Shrivaastava/src/components/HeroSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$components$2f$AboutSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Aarya-Shrivaastava/src/components/AboutSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$components$2f$SkillsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Aarya-Shrivaastava/src/components/SkillsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$components$2f$ExperienceSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Aarya-Shrivaastava/src/components/ExperienceSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$components$2f$CertificationsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Aarya-Shrivaastava/src/components/CertificationsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$components$2f$ResumeSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Aarya-Shrivaastava/src/components/ResumeSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Aarya-Shrivaastava/src/components/Footer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('dark');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const savedTheme = localStorage.getItem('theme');
            const resolved = savedTheme ?? 'dark';
            setTheme(resolved);
            document.documentElement.classList.remove('dark', 'light');
            document.documentElement.classList.add(resolved);
        }
    }["Home.useEffect"], []);
    const toggleTheme = ()=>{
        const nextTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(nextTheme);
        localStorage.setItem('theme', nextTheme);
        document.documentElement.classList.remove('dark', 'light');
        document.documentElement.classList.add(nextTheme);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative min-h-screen transition-colors duration-500",
        style: {
            background: 'var(--background)',
            color: 'var(--foreground)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    inset: 0,
                    background: theme === 'dark' ? '#080810' : '#f9fafb',
                    zIndex: -20,
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/Aarya-Shrivaastava/src/app/page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$components$2f$ui$2f$neural$2d$noise$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NeuralNoise"], {
                color: theme === 'dark' ? [
                    0.92,
                    0.1,
                    0.1
                ] : [
                    0.80,
                    0.10,
                    0.10
                ],
                opacity: theme === 'dark' ? 1 : 0.22,
                speed: 0.0007
            }, void 0, false, {
                fileName: "[project]/Aarya-Shrivaastava/src/app/page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                theme: theme,
                toggleTheme: toggleTheme
            }, void 0, false, {
                fileName: "[project]/Aarya-Shrivaastava/src/app/page.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Aarya-Shrivaastava/src/app/page.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$components$2f$AboutSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Aarya-Shrivaastava/src/app/page.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$components$2f$SkillsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Aarya-Shrivaastava/src/app/page.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$components$2f$ExperienceSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Aarya-Shrivaastava/src/app/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$components$2f$CertificationsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Aarya-Shrivaastava/src/app/page.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$components$2f$ResumeSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Aarya-Shrivaastava/src/app/page.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Aarya$2d$Shrivaastava$2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Aarya-Shrivaastava/src/app/page.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Aarya-Shrivaastava/src/app/page.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(Home, "D0ekClnfIGVExrH5c3Ka+aWcxxE=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Aarya-Shrivaastava_src_1t8ruce._.js.map