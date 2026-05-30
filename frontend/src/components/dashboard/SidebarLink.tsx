"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SidebarItem } from "@/types/navigation";
import NavigationIcon from "./NavigationIcon";

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
          ? "bg-primary-500 text-white"
          : "text-neutral-secondary hover:bg-primary-50 hover:text-primary-500",
      ].join(" ")}
    >
      <NavigationIcon name={item.icon} />
      <span>{item.label}</span>
    </Link>
  );
}
