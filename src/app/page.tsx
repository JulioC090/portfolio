import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-background flex justify-center items-center gap-2 flex-col">
      <h1 className="text-foreground text-2xl">Hello World!!!</h1>
      <Button>Click Here</Button>
    </div>
  );
}
