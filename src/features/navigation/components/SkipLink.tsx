interface SkipLinkProps {
  to: string;
  children?: React.ReactNode;
}

export default function SkipLink({
  to,
  children = 'Pular para o conteúdo',
}: SkipLinkProps) {
  return (
    <a href={`#${to}`} className="skip-link focusable">
      {children}
    </a>
  );
}
