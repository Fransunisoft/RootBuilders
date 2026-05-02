import type { UserRole } from "@/types/navigation";
import DashboardFooter from "./DashboardFooter";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";

type DashboardShellProps = {
  role: UserRole;
  sidebarTitle: string;
  headerTitle: string;
  headerDescription: string;
  children: React.ReactNode;
};

export default function DashboardShell({
  role,
  sidebarTitle,
  headerTitle,
  headerDescription,
  children,
}: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-[#F8FBF4]">
      <div className="flex min-h-screen">
        <DashboardSidebar role={role} title={sidebarTitle} />

        <div className="flex min-h-screen flex-1 flex-col">
          <DashboardHeader
            title={headerTitle}
            description={headerDescription}
          />

          <main className="flex-1 px-4 py-6 md:px-8">{children}</main>

          <DashboardFooter />
        </div>
      </div>
    </div>
  );
}
