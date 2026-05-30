type StatusListItem = {
  label: string;
  value: string;
};

type StatusListProps = {
  items: StatusListItem[];
};

export default function StatusList({ items }: StatusListProps) {
  return (
    <dl className="grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex items-center justify-between rounded-lg border border-neutral-card-border bg-primary-50/40 px-4 py-3"
        >
          <dt className="text-sm font-medium text-neutral-secondary">
            {item.label}
          </dt>
          <dd className="text-sm font-semibold text-gray-900">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
