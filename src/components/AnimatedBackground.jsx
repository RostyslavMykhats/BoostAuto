import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [viewport, setViewport] = useState({ width: 1, height: 1 });

  useEffect(() => {
    const updateViewport = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", updateViewport);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const offsetX = useTransform(
    smoothX,
    (value) => ((value / viewport.width) * 2 - 1) * 40
  );
  const offsetY = useTransform(
    smoothY,
    (value) => ((value / viewport.height) * 2 - 1) * 40
  );
  const gridPosition = useMotionTemplate`${offsetX}px ${offsetY}px`;
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${smoothX}px ${smoothY}px, rgba(2, 132, 199, 0.18), transparent 60%)`;
  const parallaxX = useTransform(offsetX, (value) => value * 0.35);
  const parallaxY = useTransform(offsetY, (value) => value * 0.35);
  const radarPosition = useMotionTemplate`${smoothX}px ${smoothY}px`;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: spotlight,
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(2,132,199,0.35) 0%, rgba(2,132,199,0.15) 20%, transparent 40%, transparent 100%)",
          backgroundSize: "280px 280px",
          backgroundPosition: radarPosition,
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          x: parallaxX,
          y: parallaxY,
        }}
      >
        {[120, 220, 340].map((size, index) => (
          <motion.div
            key={size}
            className="absolute left-1/2 top-1/2 rounded-full border border-[#0284c7]/20"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              marginLeft: `-${size / 2}px`,
              marginTop: `-${size / 2}px`,
            }}
            animate={{ scale: [0.9, 1.15], opacity: [0.2, 0.02] }}
            transition={{
              duration: 6 + index * 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      </motion.div>
      <motion.div
        className="absolute left-1/2 top-[-300px] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[#0284c7]/28 blur-[200px] opacity-20"
        animate={{
          y: [0, 80, -20, 0],
          x: [-60, 40, -30, -60],
          scale: [1, 1.12, 1.03, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-280px] top-[80px] h-[520px] w-[520px] rounded-full bg-[#0284c7]/22 blur-[220px] opacity-20"
        animate={{
          y: [0, -70, 30, 0],
          x: [0, -60, -20, 0],
          scale: [1, 1.1, 1.02, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[5%] top-[32%] h-64 w-64 rounded-full bg-[#0284c7]/16 blur-[44px] opacity-20"
        animate={{
          y: [0, 40, -12, 0],
          x: [0, 28, 12, 0],
          opacity: [0.2, 0.7, 0.35, 0.2],
          scale: [1, 1.14, 1.02, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[60%] top-[50%] h-44 w-44 rounded-full bg-[#0284c7]/18 blur-[34px] opacity-20"
        animate={{
          y: [0, -34, 16, 0],
          x: [0, 24, -12, 0],
          opacity: [0.2, 0.6, 0.25, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[10%] top-[70vh] h-[460px] w-[460px] rounded-full bg-[#0284c7]/20 blur-[200px] opacity-20"
        animate={{
          y: [0, 60, -18, 0],
          x: [0, 28, -14, 0],
          scale: [1, 1.08, 1.02, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-220px] top-[110vh] h-[540px] w-[540px] rounded-full bg-[#0284c7]/18 blur-[230px] opacity-20"
        animate={{
          y: [0, -70, 24, 0],
          x: [0, -40, -12, 0],
          opacity: [0.18, 0.55, 0.24, 0.18],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[52%] top-[160vh] h-[460px] w-[460px] rounded-full bg-[#0284c7]/18 blur-[210px] opacity-20"
        animate={{
          y: [0, 54, -20, 0],
          x: [0, 30, -10, 0],
          scale: [1, 1.1, 1.02, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[72%] top-[28%] h-48 w-48 rounded-full bg-[#0284c7]/14 blur-[36px] opacity-20"
        animate={{
          y: [0, -26, 12, 0],
          x: [0, 18, -8, 0],
          opacity: [0.2, 0.55, 0.25, 0.2],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[18%] top-[95vh] h-52 w-52 rounded-full bg-[#0284c7]/12 blur-[42px] opacity-20"
        animate={{
          y: [0, 32, -12, 0],
          x: [0, 20, 8, 0],
          opacity: [0.18, 0.5, 0.24, 0.18],
        }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[6%] top-[150vh] h-56 w-56 rounded-full bg-[#0284c7]/14 blur-[46px] opacity-20"
        animate={{
          y: [0, -30, 14, 0],
          x: [0, -20, -8, 0],
          opacity: [0.2, 0.58, 0.28, 0.2],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[40%] top-[210vh] h-60 w-60 rounded-full bg-[#0284c7]/12 blur-[52px] opacity-20"
        animate={{
          y: [0, 36, -14, 0],
          x: [0, 22, -10, 0],
          opacity: [0.16, 0.48, 0.22, 0.16],
        }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
