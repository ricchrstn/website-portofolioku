import { motion } from "framer-motion";
import { Briefcase, Network, ArrowUpRight } from "lucide-react";

// DevIcons dari jsDelivr CDN untuk ikon brand/teknologi
const techIcons: Record<string, string> = {
  Flutter:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  Dart: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
  Firebase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  "Fiber Optic": "fiber_optic",
  "Wi-Fi Installation": "wifi",
  Networking: "networking",
  Safety: "safety",
};

const experiences = [
  {
    icon: Briefcase,
    year: "2024",
    title: "Software Developer Intern",
    company: "Pengadilan Negeri Sukoharjo Kelas IA",
    location: "Sukoharjo, Jawa Tengah",
    period: "Jul 2024 – Sep 2024",
    description:
      "Developed an Android-based Office Supplies (ATK) Request Management application to streamline the office supply request process and improve administrative efficiency within the Secretariat.",
    responsibilities: [
      "Developed employee features for submitting, tracking, and reviewing Office Supplies (ATK) requests.",
      "Built administrator modules for managing ATK inventory, request approvals, and office supply records.",
      "Designed and implemented intuitive user interfaces using Flutter.",
      "Integrated Firebase services for real-time data management and user authentication.",
      "Collaborated with supervisors to gather requirements, conduct testing, and improve application functionality."
    ],
    tech: ["Flutter", "Dart", "Firebase", "Git"],
  },
  {
    icon: Network,
    year: "2019",
    title: "Network Engineering Intern",
    company: "PT Telekomunikasi Indonesia Tbk",
    location: "Witel Jakarta Pusat",
    period: "Jan 2019 – Mar 2019",
    description:
      "Participated in telecommunication infrastructure installation and maintenance activities.",
    responsibilities: [
      "Assisted with Wi-Fi Access Point installation.",
      "Assisted in fiber optic cable installation.",
      "Learned telecommunication infrastructure and networking fundamentals.",
      "Applied workplace safety procedures during field operations.",
      "Worked collaboratively with field technicians."
    ],
    tech: ["Networking", "Fiber Optic", "Wi-Fi Installation", "Safety"],
  },
];

// Custom icon components untuk non-brand tech (Networking & Field Work)
const CustomTechIcon = ({ tech }: { tech: string }) => {
  switch (tech) {
    case "Fiber Optic":
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M6 12h12M18 12a3 3 0 100-6 3 3 0 000 6zM6 18a3 3 0 100-6 3 3 0 000 6z" strokeLinecap="round" />
        </svg>
      );
    case "Wi-Fi Installation":
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M12 20h.01M8.5 16.5a5 5 0 017 0M5 13a10 10 0 0114 0M1.5 9.5a15 15 0 0121 0" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "Networking":
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <rect x="16" y="16" width="6" height="6" rx="1" />
          <rect x="2" y="16" width="6" height="6" rx="1" />
          <rect x="9" y="2" width="6" height="6" rx="1" />
          <path d="M12 8v4m0 0H5v4m7-4h7v4" strokeLinecap="round" />
        </svg>
      );
    case "Safety":
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8M8 12h8" strokeLinecap="round" />
        </svg>
      );
  }
};

const TechBadge = ({ tech }: { tech: string }) => {
  const iconUrl = techIcons[tech];
  const hasIcon = iconUrl && !iconUrl.startsWith("http") === false;

  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-muted/60 border border-border/50 rounded-lg text-[11px] font-body text-foreground/80 hover:border-accent/30 transition-colors duration-300">
      {hasIcon ? (
        <img
          src={iconUrl}
          alt={tech}
          className="w-3.5 h-3.5 object-contain"
          loading="lazy"
        />
      ) : (
        <span className="text-accent">
          <CustomTechIcon tech={tech} />
        </span>
      )}
      <span>{tech}</span>
    </span>
  );
};

const Career = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="career" className="px-4 py-16 sm:px-6 md:px-12 md:py-24 lg:px-16">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header Section */}
        <div className="flex flex-col mb-12 md:mb-20">
          <span className="font-serif-italic text-accent text-lg md:text-xl mb-2">
            My Journey
          </span>
          <h2
            className="font-display font-extrabold text-foreground uppercase leading-[0.95] tracking-tighter text-4xl sm:text-5xl md:text-6xl"
          >
            Working <span className="text-accent">Experience</span>
          </h2>
        </div>

        {/* Experience Grid/Stack */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-8 md:space-y-12"
        >
          {experiences.map((exp) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl md:rounded-3xl border border-border/50 bg-background/50 backdrop-blur-sm p-6 md:p-8 shadow-xl shadow-black/5 transition-all duration-500 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/5"
              >
                {/* Arrow indicator on top-right of the card */}
                <div className="absolute top-6 right-6 text-muted-foreground/40 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Left Column: Icon and Year */}
                  <div className="flex md:flex-col items-center md:items-start gap-4 flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-500">
                      <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                    </div>
                    <span className="font-serif-italic text-2xl text-accent/80 md:mt-2">
                      {exp.year}
                    </span>
                  </div>

                  {/* Right Column: Experience Details */}
                  <div className="flex-1 min-w-0">
                    {/* Header */}
                    <div className="space-y-1">
                      <h3 className="font-display font-bold text-foreground text-xl md:text-2xl tracking-tight">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                        <span className="font-semibold text-foreground/90">
                          {exp.company}
                        </span>
                        <span className="text-muted-foreground/60">•</span>
                        <span className="text-muted-foreground">{exp.location}</span>
                        <span className="text-muted-foreground/60 hidden sm:inline">•</span>
                        <span className="text-xs text-muted-foreground/75 font-body block sm:inline">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="mt-4 font-body text-sm md:text-base leading-relaxed text-muted-foreground/90">
                      {exp.description}
                    </p>

                    {/* Responsibilities list (Vertical bar styling) */}
                    <div className="mt-5 border-l-2 border-accent/20 pl-4 space-y-3">
                      <h4 className="text-xs uppercase font-display tracking-wider text-accent font-bold">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-2 text-sm font-body text-muted-foreground leading-relaxed">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="relative">
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border/30">
                      {exp.tech.map((tech) => (
                        <TechBadge key={tech} tech={tech} />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Career;