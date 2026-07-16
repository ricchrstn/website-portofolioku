import rcsImg from "@/assets/rizky-cristian.jpeg"; // Silakan ganti path asset ini dengan foto Anda jika sudah ada
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Smartphone, Database } from "lucide-react";
import { useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const headingY = useTransform(scrollYProgress, [0, 1], [100, -50]);

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  const expertiseCards = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Laravel • PHP • JavaScript • Tailwind CSS",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Flutter • Dart • Firebase",
    },
    {
      icon: Database,
      title: "Backend & Database",
      description: "MySQL • REST API • Firebase",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="flex flex-col justify-center px-4 py-12 sm:px-6 sm:py-16 md:px-12 md:py-20 lg:px-16"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div style={{ y: headingY }}>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="font-display font-extrabold text-foreground uppercase leading-[0.95] tracking-tighter mb-10 sm:mb-12 md:mb-16 text-6xl-fluid"
            style={{ fontSize: "clamp(2rem, 7vw, 5rem)" }}
          >
            About <span className="text-accent">Me</span>
          </motion.h2>
        </motion.div>

        <div className="mt-10 grid gap-8 pt-4 md:mt-20 md:grid-cols-12 md:gap-10 md:pt-6 lg:gap-12">
          {/* Left: Profile Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="md:col-span-4 flex justify-center md:justify-start"
          >
            <div className="relative w-[220px] sm:w-[260px] md:w-full max-w-[320px]">
              {/* Decorative zigzag — top left */}
              <svg
                className="absolute -left-4 -top-6 z-10 h-10 w-10 text-foreground sm:-left-10 sm:h-12 sm:w-12"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 36L12 12L20 28L28 8L36 24L44 4"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Photo frame — elevated card with hover effect */}
              <motion.div
                className="mt-4 relative z-[1] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-black/20 aspect-[3/4] border border-border/30 group cursor-pointer"
                whileHover={{ scale: 1.02, rotate: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src={rcsImg}
                  alt="Rizky Cristian S"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Border accent on hover */}
                <div className="absolute inset-0 rounded-2xl md:rounded-3xl border-[3px] border-transparent group-hover:border-accent/30 transition-colors duration-500" />
              </motion.div>

              {/* Decorative accent swoosh — bottom right (hidden on mobile to avoid text overlap) */}
              <svg
                className="absolute -right-6 w-36 h-36 text-accent z-0 hidden md:block"
                viewBox="0 0 160 160"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 140C20 140 40 60 80 40C120 20 160 60 140 100C120 140 60 160 20 140Z" />
                <path d="M60 160C60 160 100 100 140 120C160 130 140 160 100 160H60Z" />
              </svg>
            </div>
          </motion.div>

          {/* Right: Bio + Expertise Cards */}
          <div className="md:col-span-8 space-y-8 md:space-y-10">
            {/* Description */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="space-y-5 md:space-y-6"
            >
              <p className="font-display font-bold text-foreground text-2xl md:text-3xl lg:text-4xl tracking-tight">
                Hi, I'm <span className="text-accent">Rizky Cristian S</span>
              </p>

              <div className="space-y-4">
                <p className="font-body text-foreground/90 leading-[1.8] text-base md:text-lg font-medium">
                  Software Engineer and Informatics Engineering graduate from Telkom University, passionate about building modern web and mobile applications that solve real-world problems.
                </p>

                <p className="font-body text-muted-foreground leading-[1.8] text-base md:text-lg">
                  I specialize in web development using <span className="text-foreground font-medium">Laravel, PHP, JavaScript, MySQL, and Tailwind CSS</span>, while also having experience developing Android applications with <span className="text-accent font-medium">Flutter and Firebase</span>. Throughout my academic projects and internships, I have built inventory management systems, administrative applications, and digital solutions focused on improving operational efficiency and user experience.
                </p>

                <p className="font-body text-muted-foreground leading-[1.8] text-base md:text-lg">
                  I enjoy learning new technologies, writing clean and maintainable code, and continuously improving my skills in Software Engineering, Web Development, IT Support, and System Development.
                </p>
              </div>
            </motion.div>

            {/* Expertise Section */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="space-y-5"
            >
              <h3 className="font-display font-bold text-foreground text-xl md:text-2xl tracking-tight uppercase">
                Expertise
              </h3>
              
              <div className="grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
                {expertiseCards.map((card, index) => (
                  <motion.div
                    key={card.title}
                    variants={fadeUp}
                    custom={2 + index * 0.5}
                    whileHover={{
                      y: -6,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                    }}
                    className="group relative min-w-0 cursor-pointer overflow-hidden rounded-2xl border border-border/40 bg-background shadow-lg shadow-black/5 transition-all duration-500 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10 md:rounded-3xl"
                  >
                    <div className="relative p-5 md:p-6 flex flex-col gap-4">
                      <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-muted/80 flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-500 group-hover:scale-110">
                        <card.icon
                          className="w-6 h-6 md:w-7 md:h-7 text-accent"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-foreground text-base md:text-lg mb-1.5 group-hover:text-accent transition-colors duration-300">
                          {card.title}
                        </h4>
                        <p className="font-body text-muted-foreground leading-relaxed text-sm">
                          {card.description}
                        </p>
                      </div>
                    </div>
                    {/* Hover effect gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    {/* Corner accent */}
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-tl-full" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;