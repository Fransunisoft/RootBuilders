type MetricCardProps = {
  label: string;
  value: string;
  tone?: "default" | "success" | "warning" | "danger" | "info";
};

const toneClass = {
  default: "text-gray-900",
  success: "text-success-700",
  warning: "text-warning-700",
  danger: "text-error-600",
  info: "text-primary-500",
};

export default function MetricCard({
  label,
  value,
  tone = "default",
}: MetricCardProps) {
  return (
    <div className="rounded-lg border border-neutral-card-border bg-neutral-light p-5 shadow-sm">
      <p className="text-sm font-medium text-neutral-secondary">{label}</p>
      <p className={`mt-2 text-3xl font-bold ${toneClass[tone]}`}>{value}</p>
    </div>
  );
}
