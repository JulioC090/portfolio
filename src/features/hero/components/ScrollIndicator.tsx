import useIsScrolled from '@/features/navigation/hooks/useIsScrolled';
import { motion } from 'motion/react';

export default function ScrollIndicator() {
  const { isScrolled } = useIsScrolled();

  const scrollVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delay: 2 },
    },
  };

  const discoverVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, delay: 2.5 },
    },
  };

  const scrolledVariants = {
    hidden: { opacity: 0, pointerEvents: 'none' },
    visible: { opacity: 1, pointerEvents: 'auto' },
  };

  return (
    <motion.div
      className="flex flex-col gap-4 items-center absolute bottom-8 left-1/2 transform -translate-x-1/2"
      animate={isScrolled ? 'hidden' : 'visible'}
      initial="hidden"
      variants={scrolledVariants}
    >
      <motion.div
        className="animate-bounce"
        variants={scrollVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/30 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
      <motion.p
        className="text-sm text-muted-foreground uppercase tracking-wider"
        variants={discoverVariants}
        initial="hidden"
        animate="visible"
      >
        Role para descobrir
      </motion.p>
    </motion.div>
  );
}
