type PagePanelProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

export default function PagePanel({
  title,
  description,
  children,
}: PagePanelProps) {
  return (
    <section className="rounded-lg border border-neutral-card-border bg-neutral-light p-6 shadow-sm">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-neutral-secondary">
          {description}
        </p>
      </div>
      {children ? <div className="mt-6">{children}</div> : null}
    </section>
  );
}
