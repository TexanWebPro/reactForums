import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/forum/$forumId/thread/$threadId")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/forum/$forumId/thread/$threadId"!</div>;
}
