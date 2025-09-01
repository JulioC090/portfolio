import { NavItem } from '@/features/navigation/types/INavItem';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  item: NavItem;
  onClick: (href: string, anchor?: boolean) => void;
  className?: string;
}

export default function NavLink({ item, onClick, className }: NavLinkProps) {
  return (
    <a
      href={item.href}
      className={cn(
        'text-muted-foreground hover:text-foreground focusable rounded-md p-2',
        className,
      )}
      onClick={() => onClick(item.href, item.anchor)}
    >
      {item.name}
    </a>
  );
}
