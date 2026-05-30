export type UserRole = "super admin" | "participant";

export type WorkspaceId = "super-admin" | "participant";

export type NavigationIcon =
  | "activity"
  | "dashboard"
  | "members"
  | "profile"
  | "reports"
  | "settings"
  | "submissions"
  | "tasks"
  | "teams";

export type SidebarItem = {
  label: string;
  href: string;
  icon: NavigationIcon;
  requiresTeamLead?: boolean;
};
