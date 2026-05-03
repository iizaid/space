type BrandMarkProps = {
  className?: string;
  variant?: 'light' | 'dark';
};

export function BrandMark({ className = '', variant = 'light' }: BrandMarkProps) {
  return (
    <img
      className={`brand-mark brand-mark--${variant} ${className}`}
      src="/generated/logo-hq.png"
      alt="Space Restocafe"
      width="856"
      height="163"
    />
  );
}
