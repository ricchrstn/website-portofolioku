import ThemeToggle from "@/components/ThemeToggle";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { Download, Menu } from "lucide-react";
import { useState } from "react";

const cvUrl =
  "https://drive.google.com/drive/folders/1IZoEBLmG1xPvJj1COSfMqlidb2lvBoIy?usp=sharing";
const certificateUrl =
  "https://drive.google.com/drive/folders/1ikBGg9gVaR7gNNFRaUUfqtMZIiBpPg1j?usp=sharing";

const Header = () => {
  const navLinks = ["Home", "About", "Career", "Skills", "Projects", "Contact"];
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex min-h-16 items-center justify-between gap-3 border-b border-sky-400/20 bg-background/90 px-4 py-3 backdrop-blur-sm sm:px-6 lg:px-10 xl:px-16">
      {/* Logo - Menggunakan Serif Italic */}
      <a
        href="#"
        className="relative z-10 flex-shrink-0 font-serif italic tracking-wide text-sky-500 dark:text-sky-400 text-xl font-semibold"
      >
        Rcs.
      </a>

      {/* Desktop Navigation */}
      <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-2 lg:flex xl:gap-4">
        {navLinks.map((link) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            className="nav-link min-h-11 px-2.5 py-3 font-sans text-xs font-medium uppercase tracking-normal text-muted-foreground transition-colors duration-300 hover:text-sky-500 dark:hover:text-sky-400 xl:text-sm"
          >
            {link}
          </button>
        ))}
      </nav>

      {/* Desktop Right */}
      <div className="relative z-10 hidden items-center gap-3 lg:flex">
        <ThemeToggle />

        {/* Certificate - Bersih Tanpa [] */}
        <motion.a
          href={certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group hidden min-h-11 items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 transition-all duration-300 hover:bg-sky-500 xl:flex"
        >
          <span className="text-xs font-mono font-medium tracking-tight text-sky-500 dark:text-sky-400 transition-colors group-hover:text-white">
            Certificate
          </span>
        </motion.a>

        {/* CV - Bersih Tanpa [] */}
        <motion.a
          href={cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group flex min-h-11 items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 transition-all duration-300 hover:bg-sky-500"
        >
          <Download className="h-4 w-4 text-sky-500 dark:text-sky-400 transition-colors group-hover:text-white" />
          <span className="text-xs font-mono font-medium tracking-tight text-sky-500 dark:text-sky-400 transition-colors group-hover:text-white">
            CV
          </span>
        </motion.a>
      </div>

      {/* Mobile */}
      <div className="flex items-center gap-2 lg:hidden">
        <ThemeToggle />

        {/* Mobile CV */}
        <motion.a
          href={cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.95 }}
          className="group flex h-11 w-11 items-center justify-center rounded-full border border-sky-400/30 bg-sky-400/10 transition-all duration-300 hover:bg-sky-500"
        >
          <Download className="h-5 w-5 text-sky-500 dark:text-sky-400 transition-colors group-hover:text-white" />
        </motion.a>

        {/* Menu */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="min-h-11 min-w-11 p-2 text-muted-foreground transition-colors hover:text-sky-500 dark:hover:text-sky-400"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Sheet */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="flex w-[min(22rem,calc(100vw-2rem))] flex-col justify-center gap-6 bg-background p-6"
        >
          <SheetTitle className="sr-only">Navigation</SheetTitle>

          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-left font-sans text-2xl font-bold uppercase tracking-tight text-foreground transition-colors hover:text-sky-500 dark:hover:text-sky-400"
            >
              {link}
            </button>
          ))}

          <motion.a
            href={certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="text-left font-mono text-xl text-sky-500 dark:text-sky-400 transition-colors hover:text-sky-600 dark:hover:text-sky-300"
          >
            Certificate
          </motion.a>

          <motion.a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 font-mono text-xl text-sky-500 dark:text-sky-400 transition-colors hover:text-sky-600 dark:hover:text-sky-300"
          >
            <Download className="h-5 w-5" />
            CV
          </motion.a>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;