import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

interface IconBoxProps {
  className?: string;
  children: React.ReactNode;
}

export default function IconBox({ className, children }: IconBoxProps) {
  return (
    <div
      className={cn(
        'w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center',
        className,
      )}
    >
      <Slot className="h-6 w-6 text-primary">{children}</Slot>
    </div>
  );
}
