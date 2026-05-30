import type { SidebarItem, UserRole, WorkspaceId } from "@/types/navigation";

export type WorkspaceConfig = {
  id: WorkspaceId;
  role: UserRole;
  sidebarTitle: string;
  headerTitle: string;
  headerDescription: string;
  navigation: SidebarItem[];
};

export const roleDefinitions: Record<UserRole, string> = {
  "super admin":
    "Has full system access, including cohort operations, participant management, reporting, and invitations for other admins.",
  participant:
    "Owns personal progress, task submissions, profile details, and engagement activity.",
};

export const teamLeadDefinition =
  "A participant assigned by an admin to monitor their team. This adds My Team access without changing the participant role.";

export const workspaceConfig: Record<WorkspaceId, WorkspaceConfig> = {
  "super-admin": {
    id: "super-admin",
    role: "super admin",
    sidebarTitle: "Super Admin Workspace",
    headerTitle: "Super Admin Dashboard",
    headerDescription:
      "Manage system access, cohort operations, participants, teams, tasks, and engagement activity.",
    navigation: [
      { label: "Overview", href: "/admin", icon: "dashboard" },
      { label: "Admins", href: "/admin/admins", icon: "members" },
      { label: "Participants", href: "/admin/participants", icon: "members" },
      { label: "Teams", href: "/admin/teams", icon: "teams" },
      { label: "Tasks", href: "/admin/tasks", icon: "tasks" },
      { label: "Reports", href: "/admin/reports", icon: "reports" },
      { label: "Settings", href: "/admin/settings", icon: "settings" },
    ],
  },
  participant: {
    id: "participant",
    role: "participant",
    sidebarTitle: "Participant Workspace",
    headerTitle: "Participant Dashboard",
    headerDescription:
      "View your progress, submit tasks, and track your engagement status.",
    navigation: [
      { label: "Overview", href: "/participant", icon: "dashboard" },
      { label: "Tasks", href: "/participant/tasks", icon: "tasks" },
      {
        label: "Submissions",
        href: "/participant/submissions",
        icon: "submissions",
      },
      {
        label: "My Team",
        href: "/participant/my-team",
        icon: "members",
        requiresTeamLead: true,
      },
      { label: "Profile", href: "/participant/profile", icon: "profile" },
    ],
  },
};
