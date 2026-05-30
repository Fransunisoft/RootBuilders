import { filterNavigationByAccess } from "@/lib/access-control";
import type { AccessSubject } from "@/lib/access-control";
import type { WorkspaceId } from "@/types/navigation";
import { workspaceConfig } from "@/config/tenancy";
import SidebarLink from "./SidebarLink";

type DashboardSidebarProps = {
  workspaceId: WorkspaceId;
  subject: AccessSubject;
};

export function getWorkspaceNavigation(
  workspaceId: WorkspaceId,
  subject: AccessSubject,
) {
  const workspace = workspaceConfig[workspaceId];

  return filterNavigationByAccess(workspace.navigation, subject);
}

export default function DashboardSidebar({
  workspaceId,
  subject,
}: DashboardSidebarProps) {
  const workspace = workspaceConfig[workspaceId];
  const navigation = getWorkspaceNavigation(workspaceId, subject);

  return (
    <aside className="hidden h-screen w-72 shrink-0 border-r border-neutral-border bg-neutral-light px-4 py-6 lg:sticky lg:top-0 lg:block">
      <div className="mb-8 px-2">
        <h1 className="text-xl font-bold text-primary-500">RootBuilders</h1>
        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-neutral-muted">
          {workspace.sidebarTitle}
        </p>
        {subject.role === "participant" && subject.isTeamLead ? (
          <p className="mt-3 rounded-lg bg-secondary-50 px-3 py-2 text-xs font-medium text-secondary-800">
            Team lead access enabled
          </p>
        ) : null}
      </div>

      <nav className="space-y-2">
        {navigation.map((item) => (
          <SidebarLink key={item.href} item={item} />
        ))}
      </nav>
    </aside>
  );
}
