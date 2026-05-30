import { workspaceConfig } from "@/config/tenancy";
import type { SidebarItem, UserRole, WorkspaceId } from "@/types/navigation";

export type AccessSubject = {
  role: UserRole;
  isTeamLead?: boolean;
};

export function canAccessWorkspace(
  subject: AccessSubject,
  workspaceId: WorkspaceId,
) {
  return subject.role === workspaceConfig[workspaceId].role;
}

export function canAccessMyTeam(subject: AccessSubject) {
  return subject.role === "participant" && subject.isTeamLead === true;
}

export function filterNavigationByAccess(
  navigation: SidebarItem[],
  subject: AccessSubject,
) {
  return navigation.filter(
    (item) => !item.requiresTeamLead || canAccessMyTeam(subject),
  );
}
