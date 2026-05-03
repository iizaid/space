export function DecorativeCurl({ className = '' }: { className?: string }) {
  return (
    <svg className={`decorative-curl ${className}`} viewBox="0 0 118 52" aria-hidden="true">
      <path
        className="draw-path"
        d="M3 21c22 27 48 28 59 4 9-20-12-31-18-15-10 28 42 47 68-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        className="draw-path"
        d="M101 4l11 5-4 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
