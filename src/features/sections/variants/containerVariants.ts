import { Variants } from 'motion';

export const containerVariants = (
  shouldReduceMotion: boolean | null,
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: shouldReduceMotion ? 0 : 0.2,
      delayChildren: shouldReduceMotion ? 0 : 0.3,
    },
  },
});
