'use client';

import { Card, CardContent } from '@/components/ui/card';
import HeadLineText from '@/features/sections/components/HeadlineText';
import Section from '@/features/sections/components/Section';
import { service } from '@/features/sections/data/service';
import { containerVariants } from '@/features/sections/variants/containerVariants';
import { itemVariants } from '@/features/sections/variants/itemVariants';
import { motion, useReducedMotion } from 'motion/react';

export default function ServicesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="services" className="dark:bg-secondary/20 bg-secondary/80">
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
            <HeadLineText parts={service.headline}></HeadLineText>
          </motion.h2>

          <motion.p
            className="text-subhead max-w-2xl mx-auto"
            variants={itemVariants(shouldReduceMotion)}
          >
            {service.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {service.services.map((service, index) => {
            return (
              <motion.div
                key={service.title}
                variants={itemVariants(shouldReduceMotion)}
                custom={index}
              >
                <Card className="group animate-lift overflow-hidden border-0 shadow-lg bg-card h-full w-full flex flex-col hover:scale-105 transition-transform">
                  <CardContent className="px-6 py-8  flex-1 flex flex-col text-left">
                    <service.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold tracking-tight mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
}
