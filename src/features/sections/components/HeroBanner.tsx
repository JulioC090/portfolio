'use client';

import { Button } from '@/components/ui/button';
import { navigationMap } from '@/features/navigation/data/navigationItens';
import HeadLineText from '@/features/sections/components/HeadlineText';
import ScrollIndicator from '@/features/sections/components/ScrollIndicator';
import Section from '@/features/sections/components/Section';
import { hero } from '@/features/sections/data/hero';
import { containerVariants } from '@/features/sections/variants/containerVariants';
import { ctaVariants } from '@/features/sections/variants/ctaVariants';
import { itemVariants } from '@/features/sections/variants/itemVariants';
import { ArrowRight, Download } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

export default function HeroBanner() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section className="flex items-center justify-center">
      <motion.div
        variants={containerVariants(shouldReduceMotion)}
        initial="hidden"
        animate="visible"
        className="container-narrow mx-auto text-center"
      >
        <motion.h1
          variants={itemVariants(shouldReduceMotion)}
          className="text-hero mb-6"
        >
          <HeadLineText parts={hero.headline} />
        </motion.h1>

        <motion.p
          variants={itemVariants(shouldReduceMotion)}
          className="text-subhead max-w-2xl mx-auto mb-12"
        >
          {hero.description}
        </motion.p>

        <motion.div
          variants={ctaVariants(shouldReduceMotion)}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button size="lg" asChild>
            <a href={navigationMap.projects.href}>
              {hero.project}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>

          <Button variant="outline" size="lg" asChild>
            <a href={navigationMap.contact.href}>
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              {hero.cta}
            </a>
          </Button>
        </motion.div>

        <ScrollIndicator />
      </motion.div>
    </Section>
  );
}
