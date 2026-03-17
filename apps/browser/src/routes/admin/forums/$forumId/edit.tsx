import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/forums/$forumId/edit")({
  ssr: false,
  staticData: { adminLayout: true },
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/admin/forums/edit"!</div>;
}
