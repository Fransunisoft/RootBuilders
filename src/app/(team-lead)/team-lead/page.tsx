export default function TeamLeadDashboardPage() {
  return (
    <section className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">Team Members</p>
          <h3 className="mt-2 text-3xl font-bold text-gray-900">0</h3>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">Active Members</p>
          <h3 className="mt-2 text-3xl font-bold text-[#6DAF45]">0</h3>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">Inactive Members</p>
          <h3 className="mt-2 text-3xl font-bold text-red-500">0</h3>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900">
          Team Activity Overview
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          Placeholder for assigned team engagement summary.
        </p>
      </div>
    </section>
  );
}
