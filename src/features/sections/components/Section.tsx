import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'min-h-screen py-12 md:py-16 lg:py-20 xl:py-24 transition-all duration-300 delay-100',
        className,
      )}
    >
      {children}
    </section>
  );
}
