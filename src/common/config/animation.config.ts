export const globalTransitionConfig = {
  duration: 1,
  times: [0, 1],
  ease: "easeInOut",
  delay: 0.2,
};

export const globalAppearanceConfig = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
};

export const globalImgAppearanceConfig = (
  side: "x" | "y",
  sideStart: number,
  sideEnd: number,
  amount?: number
) => ({
  initial: { opacity: 0, [side]: sideStart },
  whileInView: { opacity: 1, [side]: sideEnd },
  viewport: { once: true, amount: amount ? amount : 0.2 },
});

export const globalTextAppearanceConfig = {
  initial: { opacity: 0, x: 80 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
};
