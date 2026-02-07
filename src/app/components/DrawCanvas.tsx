'use client';

import { useRef, useEffect, useState } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";

const MAX_MOVES = 5;
const BRUSH_COLOR = "rgba(255, 45, 85, 0.25)";

// Hotspot at 3 21
const CURSOR_URL = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75 1.84-1.83zM3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z' fill='%231a1818'/%3E%3C/svg%3E") 3 21, auto`;

interface DrawCanvasProps {
    onClose: () => void;
}

export default function DrawCanvas({ onClose }: DrawCanvasProps) {
    const [moves, setMoves] = useState(0);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);

    // Make drawTexturedStroke available for pre-drawing
    // We define drawing logic inside the component to access context/params easily
    // or define it outside/helper if pure. It needs context.

    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
    const lastPos = useRef<{ x: number, y: number } | null>(null);

    const [initialized, setInitialized] = useState(false);

    // "Textured Marker" / "Crayon" Algorithm
    const drawTexturedStroke = (ctx: CanvasRenderingContext2D, from: { x: number, y: number }, to: { x: number, y: number }, color = BRUSH_COLOR) => {
        const dist = Math.hypot(to.x - from.x, to.y - from.y);
        const angle = Math.atan2(to.y - from.y, to.x - from.x);

        const stepSize = 0.5;
        const radius = 9;
        const density = 15;

        ctx.strokeStyle = color;
        ctx.lineWidth = 0.8;

        for (let i = 0; i < dist; i += stepSize) {
            const centerX = from.x + (Math.cos(angle) * i);
            const centerY = from.y + (Math.sin(angle) * i);

            for (let j = 0; j < density; j++) {
                const r = Math.random() * radius;
                const theta = Math.random() * Math.PI * 2;

                const startX = centerX + Math.cos(theta) * r;
                const startY = centerY + Math.sin(theta) * r;

                const scratchLen = Math.random() * 3 + 1;
                const scratchAngle = Math.random() * Math.PI * 2;

                ctx.beginPath();
                ctx.moveTo(startX, startY);
                ctx.lineTo(startX + Math.cos(scratchAngle) * scratchLen, startY + Math.sin(scratchAngle) * scratchLen);
                ctx.stroke();
            }
        }
    };

    const initCanvas = () => {
        if (canvasRef.current && containerRef.current && !initialized) {
            const canvas = canvasRef.current;
            const rect = containerRef.current.getBoundingClientRect();

            const dpr = window.devicePixelRatio || 1;
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;

            // canvas.style.width = `${rect.width}px`;
            // canvas.style.height = `${rect.height}px`;

            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.scale(dpr, dpr);
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
                setContext(ctx);
                drawPreDrawnShape(ctx, rect.width, rect.height);
                setInitialized(true);
            }
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setInitialized(false);
            if (canvasRef.current && containerRef.current) {
                const canvas = canvasRef.current;
                const rect = containerRef.current.getBoundingClientRect();
                const dpr = window.devicePixelRatio || 1;
                canvas.width = rect.width * dpr;
                canvas.height = rect.height * dpr;
                // canvas.style.width = `${rect.width}px`;
                // canvas.style.height = `${rect.height}px`;

                const ctx = canvas.getContext('2d');
                if (ctx) {
                    ctx.scale(dpr, dpr);
                    ctx.lineCap = 'round';
                    ctx.lineJoin = 'round';
                    setContext(ctx);
                    drawPreDrawnShape(ctx, rect.width, rect.height);
                }
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const drawPreDrawnShape = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
        // Draw a straight "I" using the textured stroke
        // We simulate a mouse drag from top to bottom
        const cx = width / 2;
        const cy = height / 2;

        const startY = cy - 60;
        const endY = cy + 60;

        // Draw multiple passes to make it solid enough but textured
        // Since drawTexturedStroke is density dependent on "overlapping steps",
        // passing a direct line from A to B is fine.

        // We need "brushes" to be somewhat consistent.
        // Use a slightly more opaque color for the pre-drawn shape so it stands out?
        // Or overlay multiple strokes.
        // Let's use PRE_DRAWN_COLOR (solid #FF2D55) but with opacity?
        // The helper uses BRUSH_COLOR locally. Let's patch helper to accept color.

        // Since BRUSH_COLOR is 0.25 opacity, reusing it might be too faint for a "Prompt".
        // Let's use a slightly stronger version for the I.
        // Use exact same BRUSH_COLOR (0.25 opacity) to match user strokes exactly
        // We draw nearly identical to how a user would draw a single firm line
        drawTexturedStroke(ctx, { x: cx, y: startY }, { x: cx, y: endY }, BRUSH_COLOR);
    };

    const getPos = (e: React.MouseEvent | React.TouchEvent) => {
        const canvas = canvasRef.current;
        if (!canvas) return { x: 0, y: 0 };
        const rect = canvas.getBoundingClientRect();
        let clientX, clientY;
        if ('touches' in e) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = (e as React.MouseEvent).clientX;
            clientY = (e as React.MouseEvent).clientY;
        }
        return { x: clientX - rect.left, y: clientY - rect.top };
    };

    const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
        if (moves >= MAX_MOVES || !context) return;
        setIsDrawing(true);
        const pos = getPos(e);
        lastPos.current = pos;

        drawTexturedStroke(context, pos, { x: pos.x + 0.1, y: pos.y + 0.1 });
    };

    const draw = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDrawing || !context || !lastPos.current) return;
        const currentPos = getPos(e);
        const dist = Math.hypot(currentPos.x - lastPos.current.x, currentPos.y - lastPos.current.y);
        if (dist < 1) return;

        drawTexturedStroke(context, lastPos.current, currentPos);

        lastPos.current = currentPos;
    };

    const stopDrawing = () => {
        if (isDrawing) {
            setIsDrawing(false);
            setMoves(prev => prev + 1);
            lastPos.current = null;
        }
    };

    const handleReset = () => {
        if (context && containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            context.clearRect(0, 0, rect.width, rect.height);
            drawPreDrawnShape(context, rect.width, rect.height);
            setMoves(0);
        }
    };

    const handleSave = () => {
        if (canvasRef.current) {
            const link = document.createElement('a');
            link.download = 'my-drawing.png';
            link.href = canvasRef.current.toDataURL();
            link.click();
        }
    };

    return (
        <LazyMotion features={domAnimation}>
            {/* Backdrop */}
            <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-[65] bg-black/40 backdrop-blur-sm"
                onClick={onClose}
            />

            <m.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                onAnimationComplete={initCanvas}
                // Reduced radius: rounded-lg
                // Dashed border: border-2 border-dashed border-[#FF2D55]
                // Dotted BG: radial-gradient pattern
                className="absolute left-8 right-8 top-4 bottom-8 z-[70] bg-[#f8f8f8] rounded-lg shadow-2xl overflow-hidden flex flex-col border-2 border-dashed border-[#FF2D55]"
                style={{
                    willChange: 'transform, opacity',
                    backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }}
            >
                {/* Moves Counter - Top Left */}
                <div className="absolute top-4 left-6 z-10 text-sm font-bold font-mono text-gray-400 tracking-wider pointer-events-none">
                    {moves}/5 MOVES
                </div>

                {/* X Button inside panel - Circular */}
                <div className="absolute top-4 right-4 z-10">
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close drawing canvas"
                        className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-lg font-bold hover:scale-105 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF2D55]"
                    >
                        ✕
                    </button>
                </div>

                {/* Canvas Area with Overlay Controls */}
                <div
                    ref={containerRef}
                    className="flex-grow w-full relative mt-0 min-h-0"
                >
                    {/* The Canvas itself */}
                    <canvas
                        ref={canvasRef}
                        role="img"
                        aria-label="Valentine drawing canvas - use mouse or touch to draw"
                        style={{ cursor: CURSOR_URL }}
                        onMouseDown={startDrawing}
                        onMouseMove={draw}
                        onMouseUp={stopDrawing}
                        onMouseLeave={stopDrawing}
                        onTouchStart={startDrawing}
                        onTouchMove={draw}
                        onTouchEnd={stopDrawing}
                        className="block w-full h-full touch-none relative z-0"
                    />

                    {/* UI Overlay - Positioned absolute on top of canvas */}
                    {/* pointer-events-none ensures clicks pass through empty space to canvas */}
                    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-end p-6 pb-6">
                        <div className="flex flex-col md:flex-row items-stretch md:items-end justify-between gap-4">
                            {/* Left Side: Text and Reset */}
                            <div className="flex flex-col gap-1 pointer-events-auto">
                                <h2 className="text-xl font-bold text-black mb-1">Draw to Impress</h2>
                                <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-6">
                                    <p className="text-sm text-gray-500 leading-relaxed font-medium">
                                        There is a new shape every day. Draw something<br className="hidden md:block" />
                                        in 5 moves or less. Submit to see what others made.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={handleReset}
                                        aria-label="Reset canvas to initial state"
                                        className="text-sm font-normal text-gray-500 underline underline-offset-4 hover:text-black transition-colors whitespace-nowrap mb-1 self-start md:self-auto focus:outline-none focus-visible:text-black"
                                    >
                                        Reset Canvas
                                    </button>
                                </div>
                            </div>

                            {/* Right Side: Buttons and Moves */}
                            <div className="flex flex-col items-end gap-3 pointer-events-auto w-full md:w-auto mt-2 md:mt-0">
                                <div className="flex gap-3 w-full md:w-auto justify-stretch md:justify-end">
                                    <button
                                        type="button"
                                        aria-label="Submit your drawing"
                                        className="flex-1 md:flex-none rounded-full px-6 py-2 border border-b-[3px] border-black cursor-pointer bg-black text-white hover:bg-gray-900 transition-all active:border-b active:translate-y-[2px] font-bold text-sm shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF2D55]"
                                    >
                                        Submit
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleSave}
                                        aria-label="Save drawing as image"
                                        className="flex-1 md:flex-none rounded-full px-6 py-2 border border-b-[3px] border-black cursor-pointer bg-[#FF2D55] text-white hover:brightness-110 transition-all active:border-b active:translate-y-[2px] font-bold text-sm shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </m.div>
        </LazyMotion>
    );
}
