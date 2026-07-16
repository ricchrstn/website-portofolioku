import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUp } from "lucide-react"; // Menggunakan lucide-react untuk ikon modern

const Footer = () => {
  const socials = [
    { name: "LinkedIn", href: "https://linkedin.com/in/rickychristians" },
    { name: "GitHub", href: "https://github.com/ricchrstn" },
    { name: "Instagram", href: "https://instagram.com/rickychristians" },
    { name: "Telegram", href: "https://t.me/rickychristians" },
    { name: "TikTok", href: "https://tiktok.com/@rickychristians" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const marqueeText = "MOBILE DEV • WEB DEV • FULLSTACK • ";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-background">
      {/* 1. Modern Infinite Marquee with Slanted Style */}
      <div className="absolute left-0 right-0 top-0 overflow-hidden bg-accent/10 py-3 sm:py-4 border-y border-accent/20 -rotate-1 scale-105">
        <div className="marquee-track font-mono font-bold uppercase tracking-widest text-accent whitespace-nowrap select-none pointer-events-none text-sm sm:text-base flex gap-4">
          <span className="animate-marquee">{marqueeText.repeat(8)}</span>
          <span className="animate-marquee" aria-hidden="true">{marqueeText.repeat(8)}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mt-16">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-border/60"
        >
          {/* KOLOM KIRI (5/12): Big Bold Brand Callout */}
          <div className="lg:col-span-5 space-y-6">
            <motion.h2 
              variants={fadeUp}
              className="font-serif-italic text-accent leading-none tracking-tight text-7xl sm:text-8xl lg:text-9xl cursor-default selection:bg-accent selection:text-white"
            >
              Cristian
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground text-sm sm:text-base max-w-sm leading-relaxed">
              Crafting scalable fullstack web applications and robust mobile experiences from concept to production.
            </motion.p>
            {/* Status Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Available for New Projects</span>
            </motion.div>
          </div>

          {/* KOLOM TENGAH (4/12): Direct Contact Link */}
          <motion.div variants={fadeUp} className="lg:col-span-4 flex flex-col justify-end space-y-4">
            <span className="font-mono text-xs text-muted-foreground/60 uppercase tracking-widest block font-bold">
              Let's build together
            </span>
            <div className="group relative inline-block">
              <a
                href="mailto:rizkycristians492@gmail.com"
                className="inline-flex items-center gap-2 font-display font-extrabold text-foreground uppercase tracking-tighter text-2xl sm:text-3xl lg:text-4xl hover:text-accent transition-colors duration-300"
              >
                Get In Touch
                <ArrowUpRight className="w-6 h-6 text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300" />
            </div>
            <a
              href="mailto:rizkycristians492@gmail.com"
              className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              rizkycristians492@gmail.com
            </a>
          </motion.div>

          {/* KOLOM KANAN (3/12): Interactive Navigation */}
          <motion.div variants={fadeUp} className="lg:col-span-3 flex flex-col justify-end space-y-4">
            <span className="font-mono text-xs text-muted-foreground/60 uppercase tracking-widest block font-bold">
              Social Channels
            </span>
            <nav className="flex flex-wrap lg:flex-col gap-x-5 gap-y-3 lg:items-start">
              {socials.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group inline-flex items-center gap-1 font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wider py-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative overflow-hidden block">
                    <span className="block group-hover:-translate-y-full transition-transform duration-300">
                      {link.name}
                    </span>
                    <span className="absolute top-0 left-0 block translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-accent font-semibold">
                      {link.name}
                    </span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-accent" />
                </a>
              ))}
            </nav>
          </motion.div>
        </motion.div>

        {/* 3. Sub-Footer (Copyright & Scroll-to-Top) */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[11px] text-muted-foreground/50 tracking-wider">
            © {new Date().getFullYear()} Ricky Cristian S. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="group flex items-center justify-center w-10 h-10 rounded-full border border-border/60 hover:border-accent hover:bg-accent/5 transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:-translate-y-1 transition-all duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;