import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/619d79ae-63af-4b2f-bf8e-3628289b8265/files/6016c8f3-a889-4843-9511-a5f9f35ffd0d.jpg"
          alt="Озеро Тургояк, Южный Урал"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <div className="mb-4 text-sm uppercase tracking-widest opacity-75">Южный Урал · Чистейшее озеро России</div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          ТУРГОЯК
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">
          Жемчужина Урала — озеро с кристально чистой водой, древними тайнами острова Веры и нетронутой уральской природой
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#routes"
            className="bg-white text-black px-8 py-3 text-sm uppercase tracking-wide hover:bg-neutral-200 transition-colors duration-300"
          >
            Маршруты
          </a>
          <a
            href="#about"
            className="border border-white text-white px-8 py-3 text-sm uppercase tracking-wide hover:bg-white hover:text-black transition-colors duration-300"
          >
            Об озере
          </a>
        </div>
      </div>
    </div>
  );
}