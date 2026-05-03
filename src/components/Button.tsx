import { ArrowRight, Play } from 'lucide-react';
import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'dark';
  icon?: 'arrow' | 'play' | 'none';
  className?: string;
  ariaLabel?: string;
};

export function Button({
  children,
  href,
  variant = 'primary',
  icon = 'arrow',
  className = '',
  ariaLabel,
}: ButtonProps) {
  const classes = `ui-button ui-button--${variant} ${className}`;
  const content = (
    <>
      {icon === 'play' && (
        <span className="ui-button__play" aria-hidden="true">
          <Play size={15} fill="currentColor" />
        </span>
      )}
      <span>{children}</span>
      {icon === 'arrow' && <ArrowRight className="ui-button__arrow" size={21} aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <a className={classes} href={href} aria-label={ariaLabel}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} type="button" aria-label={ariaLabel}>
      {content}
    </button>
  );
}
