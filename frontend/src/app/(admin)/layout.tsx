import DashboardShell from "@/components/dashboard/DashboardShell";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardShell
      workspaceId="super-admin"
      subject={{ role: "super admin" }}
    >
      {children}
    </DashboardShell>
  );
}
