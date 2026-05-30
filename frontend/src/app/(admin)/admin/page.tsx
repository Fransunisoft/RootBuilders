import MetricCard from "@/components/ui/MetricCard";
import PagePanel from "@/components/ui/PagePanel";
import StatusList from "@/components/ui/StatusList";
import { roleDefinitions, teamLeadDefinition } from "@/config/tenancy";

export default function AdminDashboardPage() {
  return (
    <section className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard label="Participants" value="0" tone="info" />
        <MetricCard label="Teams" value="0" tone="success" />
        <MetricCard label="Inactive Alerts" value="0" tone="warning" />
      </div>

      <PagePanel
        title="Tenancy and access model"
        description="The dashboard uses a simplified MVP model with Admin and Participant as base roles. Team Lead is modeled as an added participant capability, keeping permissions easier to reason about as cohorts grow."
      >
        <StatusList
          items={[
            { label: "Super admin role", value: roleDefinitions["super admin"] },
            { label: "Participant role", value: roleDefinitions.participant },
            {
              label: "Team lead assignment",
              value: teamLeadDefinition,
            },
          ]}
        />
      </PagePanel>
    </section>
  );
}
