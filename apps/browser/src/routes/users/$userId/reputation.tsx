import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/users/$userId/reputation")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/users/$userId/reputation"!</div>;
}
