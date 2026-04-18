import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/forum/$forumId/thread/$threadId/$postId",
)({
  component: RouteComponent,
});

function RouteComponent() {
  console.log("route hit");
  return <div>Hello "/forum/$forumId/thread/$threadId/$postId"!</div>;
}
