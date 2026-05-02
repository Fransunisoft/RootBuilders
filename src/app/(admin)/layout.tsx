import DashboardShell from "@/components/dashboard/DashboardShell";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardShell
      role="admin"
      sidebarTitle="Admin Workspace"
      headerTitle="Admin Dashboard"
      headerDescription="Manage cohort operations, participants, teams, tasks, and engagement activity."
    >
      {children}
    </DashboardShell>
  );
}
