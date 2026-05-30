import { workspaceConfig } from "@/config/tenancy";
import type { SidebarItem, WorkspaceId } from "@/types/navigation";

export const dashboardNavigation: Record<WorkspaceId, SidebarItem[]> = {
  "super-admin": workspaceConfig["super-admin"].navigation,
  participant: workspaceConfig.participant.navigation,
};
