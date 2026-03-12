import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/")({
  ssr: false,
  staticData: { adminLayout: true },
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/admin/"!</div>;
}
