import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { contact } from '@/features/sections/data/contact';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { Send } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        data,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
          blockHeadless: true,
        },
      );

      if (response.status !== 200) throw Error(response.text);

      toast(contact.toast.success);

      reset();
    } catch {
      toast({
        ...contact.toast.error,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="animate-lift border-0 bg-card shadow-lg hover:scale-105 transition-transform">
      <CardContent className="p-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 text-start"
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Nome *
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Seu nome completo"
              className="focus-ring"
              {...register('name', { required: 'O nome é obrigatório' })}
            />
            {errors.name && (
              <span className="text-xs text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="seu.email@exemplo.com"
              className="focus-ring"
              {...register('email', {
                required: 'O email é obrigatório',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Digite um email válido',
                },
              })}
            />
            {errors.email && (
              <span className="text-xs text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="message" className="text-sm font-medium">
              Mensagem *
            </Label>
            <Textarea
              id="message"
              placeholder="Conte-me sobre seu projeto ou como posso ajudar..."
              className="focus-ring min-h-32 resize-none"
              {...register('message', { required: 'A mensagem é obrigatória' })}
            />
            {errors.message && (
              <span className="text-xs text-red-500">
                {errors.message.message}
              </span>
            )}
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full"
            size="lg"
          >
            {isLoading ? (
              'Enviando...'
            ) : (
              <>
                Enviar Mensagem
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
