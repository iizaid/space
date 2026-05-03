type SectionLabelProps = {
  children: string;
};

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="section-label reveal">
      <span aria-hidden="true" />
      {children}
    </p>
  );
}
