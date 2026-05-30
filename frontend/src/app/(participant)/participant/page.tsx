import MetricCard from "@/components/ui/MetricCard";
import PagePanel from "@/components/ui/PagePanel";
import StatusList from "@/components/ui/StatusList";

export default function ParticipantDashboardPage() {
  return (
    <section className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard label="Activity Status" value="Active" tone="success" />
        <MetricCard label="Pending Tasks" value="0" />
        <MetricCard label="Submissions" value="0" tone="info" />
      </div>

      <PagePanel
        title="My progress"
        description="Participant access stays focused on personal tasks, submissions, profile details, and engagement status."
      >
        <StatusList
          items={[
            { label: "Base role", value: "Participant" },
            { label: "Last active", value: "Today" },
            { label: "Current team", value: "Unassigned" },
            { label: "Current track", value: "Not set" },
          ]}
        />
      </PagePanel>
    </section>
  );
}
