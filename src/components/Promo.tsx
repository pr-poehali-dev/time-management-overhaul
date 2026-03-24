import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="/images/spiral-circles.jpg"
            alt="Abstract graphic"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </div>

      <h3 className="absolute top-12 left-6 text-white uppercase z-10 text-xs tracking-widest opacity-60">
        Результаты говорят сами
      </h3>

      <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white text-center">
          <div>
            <p className="text-6xl md:text-7xl font-bold">120+</p>
            <p className="mt-2 text-sm uppercase tracking-widest opacity-70">Проектов запущено</p>
          </div>
          <div>
            <p className="text-6xl md:text-7xl font-bold">×3</p>
            <p className="mt-2 text-sm uppercase tracking-widest opacity-70">Рост конверсии в среднем</p>
          </div>
          <div>
            <p className="text-6xl md:text-7xl font-bold">5 лет</p>
            <p className="mt-2 text-sm uppercase tracking-widest opacity-70">На рынке</p>
          </div>
        </div>
      </div>

      <p className="absolute bottom-12 left-6 text-white text-lg sm:text-xl md:text-2xl max-w-lg z-10 opacity-90 leading-relaxed">
        Каждый проект — это партнёрство. Мы вкладываемся так, будто это наш собственный бизнес.
      </p>
    </div>
  );
}
