import { useEffect, useState } from "react";

export default function CometCursor() {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    const handleMove = (e) => {
      const newPoint = {
        x: e.clientX,
        y: e.clientY,
      };

      setPoints((prev) => [...prev.slice(-15), newPoint]);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      {points.map((p, i) => (
        <div
          key={i} // ✅ smoother than Date.now()
          className="pointer-events-none fixed z-50"
          style={{
            left: p.x,
            top: p.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            style={{
              width: "22px",
              height: "22px",
              background: "#2dd4bf",
              clipPath:
                "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",

              // ⭐ trail fade
              opacity: (i + 1) / points.length,

              // 💫 scale + rotation
              transform: `scale(${(i + 1) / points.length}) rotate(${i * 12}deg)`,

              // 🔥 comet head glow (last particle brighter)
              filter:
                i === points.length - 1
                  ? "drop-shadow(0 0 14px #2dd4bf)"
                  : "drop-shadow(0 0 5px #2dd4bf)",

              // ✨ sparkle animation
              animation: "twinkle 0.6s ease-in-out infinite alternate",
            }}
          />
        </div>
      ))}
    </>
  );
}