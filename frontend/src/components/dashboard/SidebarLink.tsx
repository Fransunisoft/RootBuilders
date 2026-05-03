"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SidebarItem } from "@/types/navigation";

type SidebarLinkProps = {
  item: SidebarItem;
};

export default function SidebarLink({ item }: SidebarLinkProps) {
  const pathname = usePathname();

  const isActive =
    pathname === item.href || pathname.startsWith(`${item.href}/`);

  return (
    <Link
      href={item.href}
      className={[
        "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition",
        isActive
          ? "bg-[#6DAF45] text-white"
          : "text-gray-600 hover:bg-[#F0F8EA] hover:text-[#2F5D1E]",
      ].join(" ")}
    >
      <span className="text-base">{item.icon}</span>
      <span>{item.label}</span>
    </Link>
  );
}
