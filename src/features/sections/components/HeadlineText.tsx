import React from 'react';

type HeadLinePart = {
  text: string;
  highlight: boolean;
};

interface HeadLineProps extends React.HTMLAttributes<HTMLElement> {
  parts: HeadLinePart[];
}

export default function HeadLineText({ parts }: HeadLineProps) {
  return (
    <>
      {parts.map((part, idx) => (
        <span
          key={idx}
          className={part.highlight ? 'text-primary' : 'text-foreground'}
        >
          {part.text}{' '}
        </span>
      ))}
    </>
  );
}
