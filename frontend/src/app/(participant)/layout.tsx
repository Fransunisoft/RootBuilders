import DashboardShell from "@/components/dashboard/DashboardShell";
import { currentParticipantAccess } from "@/config/session";

export default function ParticipantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardShell workspaceId="participant" subject={currentParticipantAccess}>
      {children}
    </DashboardShell>
  );
}
