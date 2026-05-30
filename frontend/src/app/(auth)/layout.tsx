export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-primary-50 px-4">
      <section className="w-full max-w-md rounded-2xl border border-neutral-card-border bg-neutral-light p-6 shadow-sm">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-primary-500">RootBuilders</h1>
          <p className="mt-2 text-sm text-gray-500">
            Talent Engagement Dashboard
          </p>
        </div>

        {children}
      </section>
    </main>
  );
}
