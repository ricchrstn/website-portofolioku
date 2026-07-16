import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Layout,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Eye,
} from "lucide-react";
import { useRef, useState } from "react";

// ============================================
// IMPORT ASSETS (SCREENSHOTS)
// ============================================
import imgPerawatan from "../assets/PENGURUS PERAWATAN BARANG.png";
import imgEditPerawatan from "../assets/PENGURUS EDIT PERAWATAN BARANG.png";
import imgTopsis from "../assets/Bendahara-Analisis Hasil Topsis.png";
import imgAudit from "../assets/ADMIN LAPORAN AUDIT.png";

// ============================================
// PROJECT INTERFACE
// ============================================
interface DetailedProject {
  name: string;
  tagline: string;
  category: string;
  description: string;
  overview: string;
  features: string[];
  tech: string[];
  year: string;
  images: { src: string; alt: string }[];
}

const hkbpProject: DetailedProject = {
  name: "HKBP Setia Mekar E-Inventory Management System",
  tagline: "Centralized Church Asset & Procurement System",
  category: "Web Development Project",
  description:
    "A web-based inventory management system developed for HKBP Setia Mekar Church to digitalize inventory operations, improve asset tracking, and support procurement decision-making through an integrated and centralized platform.",
  overview:
    "This project was developed as my undergraduate final project to replace manual inventory processes at HKBP Setia Mekar Church with a centralized digital system. It enables administrators to manage inventory, borrowing, maintenance, procurement, and financial records efficiently while providing procurement recommendations using the TOPSIS decision support method. The system improves operational efficiency, transparency, and data accuracy across inventory management activities.",
  features: [
    "Inventory Management",
    "Asset & Borrowing Management",
    "Maintenance Management",
    "Procurement Management",
    "Financial Management",
    "Audit Management",
    "Role-Based Access Control",
    "Decision Support System (TOPSIS)",
  ],
  tech: [
    "Laravel 12",
    "PHP",
    "MySQL",
    "Tailwind CSS",
    "JavaScript",
    "REST API",
    "Git",
  ],
  year: "2026",
  images: [
    { src: imgPerawatan, alt: "Pengurus - Perawatan Barang" },
    { src: imgEditPerawatan, alt: "Pengurus - Edit Perawatan Barang" },
    { src: imgTopsis, alt: "Bendahara - Analisis Hasil TOPSIS" },
    { src: imgAudit, alt: "Admin - Laporan Audit" },
  ],
};

// ============================================
// SECTION HEADER COMPONENT
// ============================================
interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  highlight: string;
  delay?: number;
}

const SectionHeader = ({
  eyebrow,
  title,
  highlight,
  delay = 0,
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="mb-12"
    >
      <span className="inline-flex items-center gap-3 font-body text-xs font-medium text-muted-foreground uppercase tracking-[0.2em] mb-3">
        <span className="w-12 h-px bg-accent" />
        {eyebrow}
        <span className="w-12 h-px bg-accent hidden sm:block" />
      </span>

      <h2
        className="font-display font-black text-foreground uppercase leading-[0.95] tracking-tighter"
        style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)" }}
      >
        {title}
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent/80 to-accent/60">
          {highlight}
        </span>
      </h2>
    </motion.div>
  );
};

// ============================================
// MAIN PROJECT SECTION
// ============================================
const Project = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const nextImage = () => {
    setCurrentImgIndex((prev) => (prev + 1) % hkbpProject.images.length);
  };

  const prevImage = () => {
    setCurrentImgIndex((prev) =>
      prev === 0 ? hkbpProject.images.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 md:py-24 overflow-hidden"
    >
      <div className="relative max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <SectionHeader
          eyebrow="Projects Section"
          title="Featured Projects"
          highlight="Web Development"
          delay={0}
        />

        {/* Neumorphic Container for Single Project */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full rounded-3xl overflow-hidden text-left p-6 sm:p-8 lg:p-10"
          style={{
            background: "hsl(var(--background))",
            boxShadow:
              "12px 12px 24px hsl(var(--foreground) / 0.05), -12px -12px 24px hsl(var(--background) / 0.9), inset 1px 1px 1px hsl(var(--background) / 0.95)",
          }}
        >
          {/* Subtle Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-indigo-500/5 to-transparent opacity-40 pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-6 lg:gap-8">
            
            {/* 📸 INTERACTIVE IMAGE SLIDER */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden group"
                 style={{
                   boxShadow: "inset 0 0 20px rgba(0,0,0,0.2)",
                   background: "hsl(var(--muted) / 0.1)"
                 }}>
              
              {/* Active Image */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImgIndex}
                  src={hkbpProject.images[currentImgIndex].src}
                  alt={hkbpProject.images[currentImgIndex].alt}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover object-top"
                />
              </AnimatePresence>

              {/* Image Title Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex items-center justify-between text-white">
                <span className="font-body text-xs sm:text-sm font-medium tracking-wide flex items-center gap-2">
                  <Eye className="w-4 h-4 text-accent" />
                  {hkbpProject.images[currentImgIndex].alt}
                </span>
                <span className="font-body text-xs opacity-75">
                  {currentImgIndex + 1} / {hkbpProject.images.length}
                </span>
              </div>

              {/* Left Navigation Arrow */}
              <button
                type="button"
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-accent transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Right Navigation Arrow */}
              <button
                type="button"
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-accent transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-1.5 -mt-2">
              {hkbpProject.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImgIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentImgIndex ? "w-6 bg-accent" : "w-2 bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            {/* Upper Section: Category, Badges, Title */}
            <div className="flex flex-wrap items-start justify-between gap-4 pt-4">
              <div>
                <span
                  className="inline-flex items-center px-3.5 py-1.5 rounded-full font-body text-xs font-semibold text-accent mb-4"
                  style={{
                    background: "hsl(var(--background))",
                    boxShadow:
                      "inset 2px 2px 5px hsl(var(--foreground) / 0.05), inset -2px -2px 5px hsl(var(--background) / 0.9)",
                  }}
                >
                  {hkbpProject.category}
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-foreground leading-tight tracking-tight">
                  {hkbpProject.name}
                </h3>
              </div>

              {/* Year Badge */}
              <div
                className="px-4 py-2 rounded-2xl"
                style={{
                  background: "hsl(var(--background))",
                  boxShadow:
                    "4px 4px 10px hsl(var(--foreground) / 0.06), -4px -4px 10px hsl(var(--background) / 0.95)",
                }}
              >
                <span className="font-body text-sm font-bold text-foreground/70">
                  {hkbpProject.year}
                </span>
              </div>
            </div>

            {/* Initial Short Description */}
            <p className="font-body text-base lg:text-lg text-muted-foreground/90 leading-relaxed max-w-4xl">
              {hkbpProject.description}
            </p>

            {/* Expandable Overview Block */}
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div
                    className="border-l-4 border-accent pl-5 my-4 italic font-body text-muted-foreground/80 text-base leading-relaxed"
                    style={{ background: "hsl(var(--muted) / 0.2)" }}
                  >
                    <blockquote className="py-2">
                      {hkbpProject.overview}
                    </blockquote>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Key Features & Tech Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border/20">
              {/* Key Features List */}
              <div>
                <h4 className="font-display font-bold text-foreground text-base mb-3 flex items-center gap-2">
                  <Layout className="w-5 h-5 text-accent" />
                  Key Features
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {hkbpProject.features.map((feature) => (
                    <li
                      key={feature}
                      className="font-body text-sm text-muted-foreground/80 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/70" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-display font-bold text-foreground text-base mb-3 flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-accent" />
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {hkbpProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-body text-xs text-foreground/75 px-3 py-1.5 rounded-xl transition-all"
                      style={{
                        background: "hsl(var(--background))",
                        boxShadow:
                          "2px 2px 4px hsl(var(--foreground) / 0.04), -2px -2px 4px hsl(var(--background) / 0.9), inset 1px 1px 1px hsl(var(--background) / 0.8)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Control Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {/* Expand Trigger Button */}
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl font-body text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                style={{
                  background: "hsl(var(--background))",
                  boxShadow: isExpanded
                    ? "inset 3px 3px 6px hsl(var(--foreground) / 0.08), inset -3px -3px 6px hsl(var(--background) / 0.9)"
                    : "5px 5px 10px hsl(var(--foreground) / 0.08), -5px -5px 10px hsl(var(--background) / 0.95)",
                  color: "hsl(var(--accent))",
                }}
              >
                {isExpanded ? (
                  <>
                    Show Less
                    <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Read More
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default Project;