import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn('min-h-screen pt-20', className)}>
      {children}
    </section>
  );
}
