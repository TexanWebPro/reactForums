import { ModQueue } from "@/components/moderation/Queue";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/mod-dashboard/queue")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <ModQueue />
    </div>
  );
}
