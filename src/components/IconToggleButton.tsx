import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

interface IconToggleButtonProps {
  onClick: () => void;
  active?: boolean;
  iconOn: React.ReactNode;
  iconOff: React.ReactNode;
  ariaLabel?: string;
}

export function IconToggleButton({
  onClick,
  active,
  iconOn,
  iconOff,
  ariaLabel,
}: IconToggleButtonProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onClick}
      aria-label={ariaLabel}
      className="relative p-2"
    >
      <span
        className={cn(
          'transition-all',
          active
            ? 'opacity-100 scale-100 rotate-0'
            : 'opacity-0 scale-0 -rotate-90',
        )}
      >
        <Slot className="size-4">{iconOn}</Slot>
      </span>
      <span
        className={cn(
          'absolute transition-all',
          active
            ? 'opacity-0 scale-0 rotate-90'
            : 'opacity-100 scale-100 rotate-0',
        )}
      >
        <Slot className="size-4">{iconOff}</Slot>
      </span>
    </Button>
  );
}
