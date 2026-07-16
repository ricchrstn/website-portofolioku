import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 40}px, ${e.clientY - 40}px)`;
      }
    };

    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", move);

    const projectEls = document.querySelectorAll("[data-cursor-view]");
    projectEls.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      projectEls.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${visible ? "visible" : ""}`}
    >
      <span className="font-body text-xs font-medium tracking-widest text-primary-foreground uppercase">
        View
      </span>
    </div>
  );
};

export default CustomCursor;
