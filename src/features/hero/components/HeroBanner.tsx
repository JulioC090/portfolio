'use client';

import { Button } from '@/components/ui/button';
import ScrollIndicator from '@/features/hero/components/ScrollIndicator';
import { navigationMap } from '@/features/navigation/data/navigationItens';
import { ArrowRight, Download } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

export default function HeroBanner() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
        delayChildren: shouldReduceMotion ? 0 : 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.01 : 0.6 },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.01 : 0.4 },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-narrow mx-auto text-center"
      >
        <motion.h1 variants={itemVariants} className="text-hero mb-6">
          <span className="text-foreground">Criando</span>{' '}
          <span className="text-primary">experiências</span>{' '}
          <span className="text-foreground">digitais</span>{' '}
          <span className="text-primary">marcantes</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-subhead max-w-2xl mx-auto mb-12"
        >
          Design moderno e desenvolvimento de alta qualidade para empresas que
          buscam se destacar no digital. Soluções que geram resultados reais.
        </motion.p>

        <motion.div
          variants={ctaVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button size="lg" className="animate-glow focus-ring group" asChild>
            <a href={navigationMap.projects.href}>
              Ver Projetos
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="focus-ring group"
            asChild
          >
            <a href={navigationMap.contact.href}>
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              Entrar em Contato
            </a>
          </Button>
        </motion.div>

        <ScrollIndicator />
      </motion.div>
    </section>
  );
}
