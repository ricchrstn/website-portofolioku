import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  // Update meta theme-color when theme changes
  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", theme === "dark" ? "#1a1a2e" : "#ffffff");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative flex h-11 w-11 items-center justify-center rounded-full text-foreground/70 transition-colors touch-manipulation hover:text-foreground"
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
    >
      <Sun
        size={20}
        strokeWidth={2}
        className={`absolute transition-all duration-300 ${
          theme === "dark"
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-0 opacity-0"
        }`}
      />
      <Moon
        size={20}
        strokeWidth={2}
        className={`absolute transition-all duration-300 ${
          theme === "dark"
            ? "rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
