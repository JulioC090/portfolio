'use client';

import { Button } from '@/components/ui/button';
import { navigationMap } from '@/features/navigation/data/navigationItens';
import HeadLineText from '@/features/sections/components/HeadlineText';
import Section from '@/features/sections/components/Section';
import { about } from '@/features/sections/data/about';
import { containerVariants } from '@/features/sections/variants/containerVariants';
import { ctaVariants } from '@/features/sections/variants/ctaVariants';
import { itemVariants } from '@/features/sections/variants/itemVariants';
import { cn } from '@/lib/utils';
import { Download } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="about" className="dark:bg-secondary/20 bg-secondary/60">
      <motion.div
        className="container-narrow mx-auto flex flex-col gap-12 text-center"
        variants={containerVariants(shouldReduceMotion)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div>
          <motion.h2
            className="text-headline mb-4"
            variants={itemVariants(shouldReduceMotion)}
          >
            <HeadLineText parts={about.headline}></HeadLineText>
          </motion.h2>

          <motion.p
            className="text-subhead max-w-2xl mx-auto"
            variants={itemVariants(shouldReduceMotion)}
          >
            {about.description}
          </motion.p>
        </div>

        <motion.div
          className="w-full p-12 border-2 border-primary/80 bg-primary/20 rounded-2xl text-left mx-auto"
          variants={itemVariants(shouldReduceMotion)}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
            {about.manifest.headline}
          </h3>
          <div className="text-lg text-muted-foreground space-y-4 leading-relaxed">
            {about.manifest.description.map((item, index) => (
              <p key={`manifest-${index}`}>{item}</p>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6">
          {about.cards.map((card, index) => (
            <motion.div
              key={card.title}
              className={cn(
                'flex-1 bg-card p-8 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform',
              )}
              custom={index}
              variants={itemVariants(shouldReduceMotion)}
            >
              <card.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">{card.title}</h3>
              <p className="text-muted-foreground">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={ctaVariants(shouldReduceMotion)}>
          <Button size="lg" className="group min-w-[180px]" asChild>
            <a href={navigationMap.contact.href}>
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              {about.cta}
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
}
