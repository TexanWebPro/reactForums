import { AdminCP } from "@/components/admin/AdminCP";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/")({
  ssr: false,
  staticData: { adminLayout: true },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <AdminCP />
    </>
  );
}
