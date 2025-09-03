import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { JSX } from 'react';

interface QuickLinkProps {
  title: string;
  action: string;
  link: { href: string; blank: boolean };
  icon: JSX.ElementType;
}

export function QuickLink(props: QuickLinkProps) {
  return (
    <Card className="group animate-lift border-0 shadow-lg bg-card hover:scale-105 transition-transform">
      <CardContent className="p-6 text-center">
        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <props.icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-lg font-semibold mb-2">{props.title}</h3>
        <Button variant="outline" className="focus-ring w-full" asChild>
          <a
            href={props.link.href}
            {...(props.link.blank && {
              target: '_blank',
              rel: 'noopener noreferrer',
            })}
          >
            {props.action}
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
