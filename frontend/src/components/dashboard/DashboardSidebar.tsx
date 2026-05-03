import { dashboardNavigation } from "@/config/navigation";
import type { UserRole } from "@/types/navigation";
import SidebarLink from "./SidebarLink";

type DashboardSidebarProps = {
  role: UserRole;
  title: string;
};

export default function DashboardSidebar({
  role,
  title,
}: DashboardSidebarProps) {
  const navigation = dashboardNavigation[role];

  return (
    <aside className="hidden h-screen w-72 shrink-0 border-r border-gray-200 bg-white px-4 py-6 lg:sticky lg:top-0 lg:block">
      <div className="mb-8 px-2">
        <h1 className="text-xl font-bold text-[#2F5D1E]">RootBuilders</h1>
        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-400">
          {title}
        </p>
      </div>

      <nav className="space-y-2">
        {navigation.map((item) => (
          <SidebarLink key={item.href} item={item} />
        ))}
      </nav>
    </aside>
  );
}
