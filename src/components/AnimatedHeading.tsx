import type { ReactNode } from 'react';

export function AnimatedHeading({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <h2 className={`section-heading reveal ${className}`}>{children}</h2>;
}
