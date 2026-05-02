import DashboardShell from "@/components/dashboard/DashboardShell";

export default function TeamLeadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardShell
      role="team-lead"
      sidebarTitle="Team Lead Workspace"
      headerTitle="Team Lead Dashboard"
      headerDescription="Track your assigned team members, tasks, submissions, and activity status."
    >
      {children}
    </DashboardShell>
  );
}
