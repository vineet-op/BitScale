import type { Transition, Variants } from "motion/react";

export const easeOut = [0.25, 0.1, 0.25, 1] as const;

export const duration = {
  fast: 0.15,
  normal: 0.25,
  slow: 0.3,
  counter: 0.6,
} as const;

export const springSnappy: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
  mass: 0.8,
};

export const tapScale = { scale: 0.98 };

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0.1 },
  },
};

export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 3 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.normal, ease: easeOut },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.normal, ease: easeOut },
  },
};

export const rowItem: Variants = {
  hidden: { opacity: 0, y: 4 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.fast, ease: easeOut },
  },
  exit: {
    opacity: 0,
    y: -4,
    transition: { duration: duration.fast, ease: easeOut },
  },
};
