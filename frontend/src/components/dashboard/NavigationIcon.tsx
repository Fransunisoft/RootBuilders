import type { NavigationIcon as NavigationIconName } from "@/types/navigation";

type NavigationIconProps = {
  name: NavigationIconName;
};

const iconLabels: Record<NavigationIconName, string> = {
  activity: "A",
  dashboard: "D",
  members: "M",
  profile: "P",
  reports: "R",
  settings: "S",
  submissions: "U",
  tasks: "T",
  teams: "G",
};

export default function NavigationIcon({ name }: NavigationIconProps) {
  return (
    <span
      aria-hidden="true"
      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-current/10 text-[11px] font-bold uppercase"
    >
      {iconLabels[name]}
    </span>
  );
}
