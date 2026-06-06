"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";

type AnimatedNumberProps = {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
  /** Show final value until in-view, then run counter animation */
  staticUntilInView?: boolean;
};

export function AnimatedNumber({
  value,
  suffix = "",
  className,
  duration = 0.6,
  staticUntilInView = false,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(
    staticUntilInView ? value : 0,
  );

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    setDisplay(0);

    const controls = animate(0, value, {
      duration,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
      onComplete: () => setDisplay(value),
    });

    return () => controls.stop();
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
