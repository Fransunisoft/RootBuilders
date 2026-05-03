type DashboardHeaderProps = {
  title: string;
  description: string;
};

export default function DashboardHeader({
  title,
  description,
}: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/90 px-4 py-4 backdrop-blur md:px-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900 md:text-2xl">
            {title}
          </h2>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
          >
            Notifications
          </button>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6DAF45] text-sm font-bold text-white">
            RB
          </div>
        </div>
      </div>
    </header>
  );
}
