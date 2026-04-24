import { ModCP } from "@/components/moderation/ModCP";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/mod-dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <ModCP />
    </div>
  );
}
