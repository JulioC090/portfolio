'use client';

import { Button } from '@/components/ui/button';
import HeadLineText from '@/features/sections/components/HeadlineText';
import { ProjectCard } from '@/features/sections/components/ProjectCard';
import Section from '@/features/sections/components/Section';
import { project } from '@/features/sections/data/project';
import { containerVariants } from '@/features/sections/variants/containerVariants';
import { ctaVariants } from '@/features/sections/variants/ctaVariants';
import { itemVariants } from '@/features/sections/variants/itemVariants';
import { BoxIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

export default function ProjectsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="projects">
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
            <HeadLineText parts={project.headline}></HeadLineText>
          </motion.h2>

          <motion.p
            className="text-subhead max-w-2xl mx-auto"
            variants={itemVariants(shouldReduceMotion)}
          >
            {project.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.projects.slice(0, 6).map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants(shouldReduceMotion)}
              custom={index}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {project.projects.length > 6 && (
          <motion.div variants={ctaVariants(shouldReduceMotion)}>
            <Button size="lg" className="min-w-[180px]" asChild>
              <a href="/projects">
                <BoxIcon className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                {project.more}
              </a>
            </Button>
          </motion.div>
        )}
      </motion.div>
    </Section>
  );
}
