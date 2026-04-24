import { ModAnnouncements } from "@/components/moderation/Announcements";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/mod-dashboard/announcements")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <ModAnnouncements />
    </div>
  );
}
