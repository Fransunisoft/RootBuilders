import MetricCard from "@/components/ui/MetricCard";
import PagePanel from "@/components/ui/PagePanel";
import StatusList from "@/components/ui/StatusList";
import { currentParticipantAccess } from "@/config/session";
import { teamLeadDefinition } from "@/config/tenancy";
import { canAccessMyTeam } from "@/lib/access-control";
import { redirect } from "next/navigation";

export default function MyTeamPage() {
  if (!canAccessMyTeam(currentParticipantAccess)) {
    redirect("/participant");
  }

  return (
    <section className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard label="Team Members" value="0" />
        <MetricCard label="Active Members" value="0" tone="success" />
        <MetricCard label="Inactive Members" value="0" tone="danger" />
      </div>

      <PagePanel
        title="My Team"
        description="Monitor the participants assigned to your team and review their engagement status."
      >
        <StatusList
          items={[
            { label: "Access rule", value: teamLeadDefinition },
            { label: "Review scope", value: "Assigned participants only" },
            { label: "Task scope", value: "Team submissions" },
            { label: "Escalation path", value: "Super admin review" },
          ]}
        />
      </PagePanel>
    </section>
  );
}
