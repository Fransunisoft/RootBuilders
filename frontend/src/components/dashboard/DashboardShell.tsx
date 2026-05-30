import { workspaceConfig } from "@/config/tenancy";
import type { AccessSubject } from "@/lib/access-control";
import type { WorkspaceId } from "@/types/navigation";
import DashboardFooter from "./DashboardFooter";
import DashboardHeader from "./DashboardHeader";
import DashboardMobileNav from "./DashboardMobileNav";
import DashboardSidebar, { getWorkspaceNavigation } from "./DashboardSidebar";

type DashboardShellProps = {
  workspaceId: WorkspaceId;
  subject: AccessSubject;
  children: React.ReactNode;
};

export default function DashboardShell({
  workspaceId,
  subject,
  children,
}: DashboardShellProps) {
  const workspace = workspaceConfig[workspaceId];
  const navigation = getWorkspaceNavigation(workspaceId, subject);

  return (
    <div className="min-h-screen bg-background">
      <div className="flex min-h-screen">
        <DashboardSidebar workspaceId={workspaceId} subject={subject} />

        <div className="flex min-h-screen flex-1 flex-col">
          <DashboardHeader
            title={workspace.headerTitle}
            description={workspace.headerDescription}
          />
          <DashboardMobileNav items={navigation} />

          <main className="flex-1 px-4 py-6 md:px-8">{children}</main>

          <DashboardFooter />
        </div>
      </div>
    </div>
  );
}
