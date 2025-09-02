import { Variants } from 'motion';

export const itemVariants = (shouldReduceMotion: boolean | null): Variants => ({
  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: shouldReduceMotion ? 0.01 : 0.6 },
  },
});
