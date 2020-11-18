export const detailsMotion = {
  rest: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeIn",
    },
  },
};

export const pageVariants = {
  initial: {
    ease: "easeIn",
    opacity: 0,
  },
  in: {
    opacity: 1,
    ease: "easeIn",
    duration: 0.2,
  },
  out: {
    opacity: 0,
    ease: "easeOut",
    duration: 0.2,
  },
};

export const pageTransition = {
  type: "tween",
  ease: "easeIn",
  duration: 0.2,
};

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

export const backVariants = {
  exit: { x: 0, opacity: 0, transition },
  enter: { x: 100, opacity: 1, transition: { delay: 1, ...transition } },
};
