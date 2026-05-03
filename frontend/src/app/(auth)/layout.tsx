export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#E7EEF5] flex items-center justify-center px-4">
      <section className="w-full max-w-md rounded-2xl bg-white p-6 shadow-sm border border-[#E7EEF5]">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-[#0D519A]">RootBuilders</h1>
          <p className="mt-2 text-sm text-gray-500">
            Talent Engagement Dashboard
          </p>
        </div>

        {children}
      </section>
    </main>
  );
}
