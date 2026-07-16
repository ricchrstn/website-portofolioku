import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [time, setTime] = useState("");
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Jakarta",
          hour12: false,
        }),
      );
    };
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  const rise = {
    hidden: { y: "100%", opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden px-4 pb-6 pt-24 sm:px-6 sm:pb-8 sm:pt-28 md:px-12 lg:px-16"
    >
      {/* Noise grain texture */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.035] hero-noise-texture" />

      {/* Accent gradient blob — top right */}
      <motion.div
        className="absolute -top-[15%] -right-[10%] w-[min(600px,70vw)] aspect-square rounded-full pointer-events-none z-0 hero-accent-blob"
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Muted gradient blob — bottom left */}
      <motion.div
        className="absolute -bottom-[10%] -left-[8%] w-[min(450px,55vw)] aspect-square rounded-full pointer-events-none z-0 hero-muted-blob"
        animate={{
          y: [0, -15, 0],
          x: [0, 12, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Profil Deskripsi */}
      <div className="overflow-hidden relative z-10">
        <motion.div
          variants={rise}
          initial="hidden"
          animate="visible"
          custom={1}
          className="max-w-[320px] sm:max-w-md leading-relaxed text-sm-fluid"
        >
          <span className="font-serif italic text-lg sm:text-xl text-foreground block mb-1">
            Rizky Cristian S.
          </span>
          <p className="font-mono text-xs text-muted-foreground leading-normal">
            Informatics Engineering Graduate
            <br />
            Software Engineer & Web Developer
            <br />
            IT Support Enthusiast
          </p>
        </motion.div>
      </div>

      {/* Judul Utama */}
      <motion.div
        style={{ y: parallaxY }}
        className="relative z-10 -mt-6 flex flex-1 flex-col items-center justify-center px-1 sm:-mt-8 sm:px-2 md:-mt-16"
      >
        <h1 className="sr-only">Rizky Cristian S — Software Engineer Portfolio</h1>
        
        {/* Teks Atas - Clean Sans */}
        <div className="overflow-hidden w-full text-center" aria-hidden="true">
          <motion.span
            variants={rise}
            initial="hidden"
            animate="visible"
            custom={2}
            className="block font-sans font-black text-foreground uppercase leading-[0.85] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 15vw, 6.5rem)" }}
          >
            Software
          </motion.span>
        </div>

        {/* Teks Tengah - AKSEN BIRU LANGIT */}
        <div
          className="overflow-hidden w-full text-center mt-1.5 sm:mt-2.5"
          aria-hidden="true"
        >
          <motion.span
            variants={rise}
            initial="hidden"
            animate="visible"
            custom={3}
            className="block font-sans font-black text-sky-500 dark:text-sky-400 uppercase leading-[0.85] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 15vw, 6.5rem)" }}
          >
            Engineer
          </motion.span>
        </div>{" "}

        {/* Teks Bawah - Serif Italic */}
        <div
          className="overflow-hidden w-full text-center mt-2 sm:mt-3"
          aria-hidden="true"
        >
          <motion.span
            variants={rise}
            initial="hidden"
            animate="visible"
            custom={4}
            className="block font-serif italic text-muted-foreground/95 normal-case leading-[0.85] tracking-wide"
            style={{ fontSize: "clamp(2.25rem, 13vw, 5.5rem)" }}
          >
            Portfolio
          </motion.span>
        </div>
      </motion.div>

      {/* Bagian Bawah - Jam Tanpa [] */}
      <div className="overflow-hidden relative z-10">
        <motion.div
          variants={rise}
          initial="hidden"
          animate="visible"
          custom={5}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 sm:gap-4"
        >
          <div className="flex items-baseline gap-3 sm:gap-4">
            <span className="font-mono text-muted-foreground tracking-widest text-xs">
              {time} WIB
            </span>
          </div>
          <span className="font-serif italic tracking-wide text-foreground text-xl">
            Rcs.
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;