import React, { useEffect, useState } from "react";
import cn from "mxcn";

const AnimateIn = ({
  children,
  delay = 0,
  duration = 500,
  className = "",
  from,
  to,
  style,
  as = "div",
}) => {
  const [animate, setAnimate] = useState(from);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const mediaQueryChangeHandler = (e) => {
      setPrefersReducedMotion(e.matches);
    };

    setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", mediaQueryChangeHandler);

    return () => {
      mediaQuery.removeEventListener("change", mediaQueryChangeHandler);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      // If the user prefers reduced motion, skip 
      setAnimate(to);
      return;
    }

    const timer = setTimeout(() => {
      setAnimate(to);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, to, prefersReducedMotion]);

  return React.createElement(
    as,
    {
      className: cn("transition-all ease-in-out", className, animate),
      style: {
        transitionDuration: prefersReducedMotion ? "0ms" : `${duration}ms`,
        ...style,
      },
    },
    children
  );
};

export default AnimateIn;
