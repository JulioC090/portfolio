'use client';

import ContactForm from '@/features/sections/components/ContactForm';
import { QuickLink } from '@/features/sections/components/ContactQuickLink';
import HeadLineText from '@/features/sections/components/HeadlineText';
import Section from '@/features/sections/components/Section';
import { contact } from '@/features/sections/data/contact';
import { containerVariants } from '@/features/sections/variants/containerVariants';
import { itemVariants } from '@/features/sections/variants/itemVariants';
import { motion, useReducedMotion } from 'motion/react';

export default function ContactSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="contact">
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
            <HeadLineText parts={contact.headline}></HeadLineText>
          </motion.h2>

          <motion.p
            className="text-subhead max-w-2xl mx-auto"
            variants={itemVariants(shouldReduceMotion)}
          >
            {contact.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          <motion.div
            className="lg:col-span-2"
            variants={itemVariants(shouldReduceMotion)}
          >
            <ContactForm />
          </motion.div>

          <div className="space-y-6">
            {contact.quickLinks.map((quickLink) => (
              <motion.div
                key={quickLink.title}
                variants={itemVariants(shouldReduceMotion)}
              >
                <QuickLink {...quickLink} />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-12"
          variants={itemVariants(shouldReduceMotion)}
        >
          <p className="text-muted-foreground">{contact.availability}</p>
        </motion.div>
      </motion.div>
    </Section>
  );
}
