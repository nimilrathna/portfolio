// TorchEffect.jsx
import React, { useRef, useEffect } from "react";

export default function TorchEffect({ children }) {
  const containerRef = useRef(null);
  const lightRef = useRef({ x: -9999, y: -9999 }); // current animated pos
  const targetRef = useRef({ x: -9999, y: -9999 }); // target pos from mouse
  const rafRef = useRef(null);

  // animation loop for smoothing
  useEffect(() => {
    const animate = () => {
      const current = lightRef.current;
      const target = targetRef.current;

      // simple easing
      current.x += (target.x - current.x) * 0.16;
      current.y += (target.y - current.y) * 0.16;

      // update CSS variables on container
      if (containerRef.current) {
        containerRef.current.style.setProperty("--tx", `${current.x}px`);
        containerRef.current.style.setProperty("--ty", `${current.y}px`);
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // update target on mouse or touch
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onMove = (clientX, clientY) => {
      const rect = el.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      targetRef.current.x = x;
      targetRef.current.y = y;
    };

    const handleMouse = (e) => onMove(e.clientX, e.clientY);
    const handleTouch = (e) => {
      if (e.touches && e.touches[0]) onMove(e.touches[0].clientX, e.touches[0].clientY);
    };

    const handleLeave = () => {
      // move light far away when cursor leaves
      targetRef.current.x = -9999;
      targetRef.current.y = -9999;
    };

    el.addEventListener("mousemove", handleMouse);
    el.addEventListener("touchmove", handleTouch, { passive: true });
    el.addEventListener("mouseleave", handleLeave);
    el.addEventListener("touchend", handleLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouse);
      el.removeEventListener("touchmove", handleTouch);
      el.removeEventListener("mouseleave", handleLeave);
      el.removeEventListener("touchend", handleLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden bg-gray-900 text-white min-h-screen"
      /* CSS variables --tx, --ty are updated by the script */
      style={{
        // base fallback
        "--tx": "-9999px",
        "--ty": "-9999px",
      }}
    >
      {/* Content under the torch */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Dark overlay with radial gradient spotlight controlled by --tx/--ty */}
     <div
  aria-hidden="true"
  className="pointer-events-none absolute inset-0 z-20"
  style={{
    backgroundImage: `radial-gradient(250px 250px at var(--tx) var(--ty),
      rgba(253, 253, 250, 0.95) 0%,
      rgba(209, 209, 207, 0.12) 22%,
      rgba(123, 121, 121, 0.85) 60%)`,
    transition: "background-image 120ms linear",
    mixBlendMode: "multiply",
  }}
/>
    </div>
  );
}
