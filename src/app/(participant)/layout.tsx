import DashboardShell from "@/components/dashboard/DashboardShell";

export default function ParticipantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardShell
      role="participant"
      sidebarTitle="Participant Workspace"
      headerTitle="Participant Dashboard"
      headerDescription="View your progress, submit tasks, and track your engagement status."
    >
      {children}
    </DashboardShell>
  );
}
