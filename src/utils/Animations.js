export const fadeInUp = {
  initial: { opacity: 0, scale: 0.8, y: 20 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.8, y: 20 },
  viewport: { once: false, amount: 0.5 },
};
