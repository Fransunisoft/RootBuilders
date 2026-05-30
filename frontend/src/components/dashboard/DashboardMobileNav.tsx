"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SidebarItem } from "@/types/navigation";
import NavigationIcon from "./NavigationIcon";

type DashboardMobileNavProps = {
  items: SidebarItem[];
};

export default function DashboardMobileNav({ items }: DashboardMobileNavProps) {
  const pathname = usePathname();

  return (
    <nav className="border-b border-gray-200 bg-white px-4 py-3 lg:hidden">
      <div className="flex gap-2 overflow-x-auto">
        {items.map((item) => {
          const isActive =
            pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition",
                isActive
                  ? "bg-primary-500 text-white"
                  : "text-neutral-secondary hover:bg-primary-50 hover:text-primary-500",
              ].join(" ")}
            >
              <NavigationIcon name={item.icon} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
