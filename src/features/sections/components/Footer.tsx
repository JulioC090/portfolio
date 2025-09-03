'use client';

import { footer } from '@/features/sections/data/footer';
import { motion } from 'motion/react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="py-12 px-6 border-t border-border"
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className="container-narrow mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold tracking-tight">
              {footer.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{footer.brand}</p>
          </div>

          <div className="flex items-center space-x-6">
            {footer.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-md p-1"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {footer.name}. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
