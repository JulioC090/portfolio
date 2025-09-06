import GithubIcon from '@/components/GithubIcon';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  videoUrl: string;
  thumbUrl: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({
  title,
  description,
  videoUrl,
  thumbUrl,
  tags,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <Card className="group animate-lift overflow-hidden border-0 shadow-lg bg-card h-full w-full flex flex-col hover:scale-105 transition-transform">
      <div className="aspect-video overflow-hidden relative">
        <video
          src={videoUrl}
          poster={thumbUrl}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-2 right-2 focus-within:opacity-100">
          {githubUrl && (
            <a
              href={githubUrl}
              className="p-2 rounded-lg hover:bg-secondary transition-colors focus-ring focusable"
              aria-label={`View ${title} on GitHub`}
              target="_blank"
            >
              <GithubIcon className="size-4" />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              className="p-2 rounded-lg hover:bg-secondary transition-colors focus-ring focusable"
              aria-label={`View ${title} live demo`}
              target="_blank"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-center mb-4">
          <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        </div>

        <p className="flex-1 text-muted-foreground mb-4 leading-relaxed text-start">
          {description}
        </p>

        <div className="flex gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs font-medium"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
