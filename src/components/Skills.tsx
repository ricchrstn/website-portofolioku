import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Terminal, Cpu, Database, Layout } from "lucide-react";

// DevIcons & Custom Icons CDN
const svglIcons: Record<string, string> = {
  laravel:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  php: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  flutter:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  dart: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
  javascript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  html5:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  css3: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  tailwindcss:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  bootstrap:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  firebase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
  mysql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  restapi: "api", 
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  github:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  postman:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  figma:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  vscode:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
};

const skillCategories = [
  {
    id: "laravel",
    title: "Laravel",
    subtitle: "Web Framework",
    icon: svglIcons.laravel,
    color: "rgba(255, 45, 32, 0.15)",
    borderColor: "hover:border-red-500/40",
    featured: true, // Kartu ukuran ganda
  },
  {
    id: "flutter",
    title: "Flutter",
    subtitle: "Cross-Platform Mobile",
    icon: svglIcons.flutter,
    color: "rgba(2, 86, 155, 0.15)",
    borderColor: "hover:border-blue-500/40",
    featured: true, // Kartu ukuran ganda
  },
  {
    id: "php",
    title: "PHP",
    subtitle: "Backend Development",
    icon: svglIcons.php,
    color: "rgba(119, 123, 180, 0.15)",
    borderColor: "hover:border-indigo-400/40",
  },
  {
    id: "dart",
    title: "Dart",
    subtitle: "Programming Language",
    icon: svglIcons.dart,
    color: "rgba(0, 180, 171, 0.15)",
    borderColor: "hover:border-teal-400/40",
  },
  {
    id: "javascript",
    title: "JavaScript",
    subtitle: "Frontend Development",
    icon: svglIcons.javascript,
    color: "rgba(247, 223, 30, 0.1)",
    borderColor: "hover:border-yellow-500/40",
  },
  {
    id: "tailwindcss",
    title: "Tailwind CSS",
    subtitle: "CSS Framework",
    icon: svglIcons.tailwindcss,
    color: "rgba(6, 182, 212, 0.15)",
    borderColor: "hover:border-cyan-400/40",
  },
  {
    id: "html5",
    title: "HTML5",
    subtitle: "Web Structure",
    icon: svglIcons.html5,
    color: "rgba(227, 79, 38, 0.15)",
    borderColor: "hover:border-orange-500/40",
  },
  {
    id: "css3",
    title: "CSS3",
    subtitle: "Web Styling",
    icon: svglIcons.css3,
    color: "rgba(21, 114, 182, 0.15)",
    borderColor: "hover:border-blue-400/40",
  },
  {
    id: "bootstrap",
    title: "Bootstrap",
    subtitle: "UI Framework",
    icon: svglIcons.bootstrap,
    color: "rgba(121, 82, 179, 0.15)",
    borderColor: "hover:border-purple-500/40",
  },
  {
    id: "firebase",
    title: "Firebase",
    subtitle: "Backend Services",
    icon: svglIcons.firebase,
    color: "rgba(255, 202, 40, 0.15)",
    borderColor: "hover:border-amber-400/40",
  },
  {
    id: "mysql",
    title: "MySQL",
    subtitle: "Relational Database",
    icon: svglIcons.mysql,
    color: "rgba(68, 121, 161, 0.15)",
    borderColor: "hover:border-sky-600/40",
  },
  {
    id: "restapi",
    title: "REST API",
    subtitle: "API Integration",
    icon: svglIcons.restapi,
    color: "rgba(0, 150, 136, 0.15)",
    borderColor: "hover:border-emerald-500/40",
  },
  {
    id: "git",
    title: "Git",
    subtitle: "Version Control",
    icon: svglIcons.git,
    color: "rgba(240, 80, 50, 0.15)",
    borderColor: "hover:border-rose-500/40",
  },
  {
    id: "github",
    title: "GitHub",
    subtitle: "Source Code",
    icon: svglIcons.github,
    color: "rgba(255, 255, 255, 0.05)",
    borderColor: "hover:border-foreground/30",
  },
  {
    id: "postman",
    title: "Postman",
    subtitle: "API Testing",
    icon: svglIcons.postman,
    color: "rgba(255, 108, 55, 0.15)",
    borderColor: "hover:border-orange-600/40",
  },
  {
    id: "figma",
    title: "Figma",
    subtitle: "UI/UX Design",
    icon: svglIcons.figma,
    color: "rgba(242, 78, 30, 0.15)",
    borderColor: "hover:border-red-400/40",
  },
  {
    id: "vscode",
    title: "VS Code",
    subtitle: "Code Editor",
    icon: svglIcons.vscode,
    color: "rgba(0, 122, 204, 0.15)",
    borderColor: "hover:border-blue-600/40",
  },
];

const cardFade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.04,
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1] as const,
    },
  }),
};

const CustomIcon = ({ name }: { name: string }) => {
  if (name === "api") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6 md:w-8 md:h-8 text-accent group-hover:scale-105 transition-transform"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    );
  }
  return null;
};

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const headingY = useTransform(scrollYProgress, [0, 1], [40, -20]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative overflow-hidden px-4 py-20 sm:px-6 md:px-12 md:py-28 lg:px-16"
    >
      {/* Background Decorative Mesh */}
      <div className="absolute top-0 right-0 -z-10 w-80 h-80 rounded-full bg-accent/5 blur-[120px]" />
      <div className="absolute bottom-10 left-10 -z-10 w-96 h-96 rounded-full bg-accent/3 blur-[150px]" />

      <div className="max-w-6xl mx-auto w-full">
        {/* Header Section */}
        <div className="flex flex-col mb-12 md:mb-16">
          <motion.div style={{ y: headingY }} className="flex flex-col">
            <span className="font-serif-italic text-accent text-lg md:text-xl mb-1 tracking-wide">
              Proficiencies
            </span>
            <h2 className="font-display font-extrabold text-foreground uppercase tracking-tighter leading-none text-4xl sm:text-5xl md:text-6xl">
              Technical <span className="text-accent">Skills</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-xl font-body text-muted-foreground text-sm sm:text-base leading-relaxed"
          >
            Technologies and tools I use to build reliable web and mobile applications.
          </motion.p>
        </div>

        {/* Bento-style Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 auto-rows-[120px] md:auto-rows-[135px]">
          {skillCategories.map((skill, i) => {
            const isCustom = !skill.icon.startsWith("http");
            const isFeatured = skill.featured;

            return (
              <motion.div
                key={skill.id}
                variants={cardFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                custom={i}
                whileHover={{ scale: 1.02 }}
                className={`group relative flex flex-col justify-between p-4 rounded-xl border border-border/40 bg-background/30 backdrop-blur-md transition-all duration-300 hover:shadow-lg ${
                  skill.borderColor
                } ${
                  isFeatured 
                    ? "col-span-2 row-span-1 sm:row-span-1 bg-accent/[0.02]" 
                    : "col-span-1 row-span-1"
                }`}
                style={{
                  "--glow-color": skill.color,
                } as React.CSSProperties}
              >
                {/* Glow Overlay Effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top right, ${skill.color} 0%, transparent 65%)`
                  }}
                />

                {/* Card Top: Icon & Indicator */}
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-muted/60 border border-border/20 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-muted">
                    {isCustom ? (
                      <CustomIcon name={skill.icon} />
                    ) : (
                      <img
                        src={skill.icon}
                        alt={skill.title}
                        className="w-5.5 h-5.5 md:w-6.5 md:h-6.5 object-contain"
                        loading="lazy"
                      />
                    )}
                  </div>
                  {isFeatured && (
                    <span className="flex items-center gap-1 text-[9px] font-bold text-accent tracking-widest uppercase bg-accent/10 px-2 py-0.5 rounded-full">
                      <Sparkles className="w-2.5 h-2.5" /> Core
                    </span>
                  )}
                </div>

                {/* Card Bottom: Text */}
                <div className="mt-2 min-w-0">
                  <h3 className="font-display font-bold text-foreground text-xs md:text-sm tracking-wide truncate group-hover:text-accent transition-colors duration-200">
                    {skill.title}
                  </h3>
                  <p className="font-body text-muted-foreground/70 text-[10px] md:text-xs truncate">
                    {skill.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Core Categories Footer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 md:mt-16 border-t border-border/20 pt-8"
        >
          {[
            { label: "Backend", icon: Terminal },
            { label: "Frontend", icon: Layout },
            { label: "Mobile Dev", icon: Cpu },
            { label: "Database", icon: Database },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-2 text-muted-foreground/80 hover:text-accent transition-colors duration-300"
              >
                <Icon className="w-4 h-4 text-accent/80" />
                <span className="font-body text-xs uppercase tracking-widest font-semibold">
                  {item.label}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;