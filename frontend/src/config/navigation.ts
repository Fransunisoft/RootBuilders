import type { SidebarItem, UserRole } from "@/types/navigation";

export const dashboardNavigation: Record<UserRole, SidebarItem[]> = {
  admin: [
    {
      label: "Overview",
      href: "/admin",
      icon: "📊",
    },
    {
      label: "Participants",
      href: "/admin/participants",
      icon: "👥",
    },
    {
      label: "Teams",
      href: "/admin/teams",
      icon: "🧩",
    },
    {
      label: "Tasks",
      href: "/admin/tasks",
      icon: "📝",
    },
    {
      label: "Reports",
      href: "/admin/reports",
      icon: "📈",
    },
    {
      label: "Settings",
      href: "/admin/settings",
      icon: "⚙️",
    },
  ],

  "team-lead": [
    {
      label: "Overview",
      href: "/team-lead",
      icon: "📊",
    },
    {
      label: "Members",
      href: "/team-lead/members",
      icon: "👥",
    },
    {
      label: "Tasks",
      href: "/team-lead/tasks",
      icon: "📝",
    },
    {
      label: "Activity",
      href: "/team-lead/activity",
      icon: "⚡",
    },
    {
      label: "Settings",
      href: "/team-lead/settings",
      icon: "⚙️",
    },
  ],

  participant: [
    {
      label: "Overview",
      href: "/participant",
      icon: "🏠",
    },
    {
      label: "Tasks",
      href: "/participant/tasks",
      icon: "📝",
    },
    {
      label: "Submissions",
      href: "/participant/submissions",
      icon: "📤",
    },
    {
      label: "Profile",
      href: "/participant/profile",
      icon: "👤",
    },
  ],
};
