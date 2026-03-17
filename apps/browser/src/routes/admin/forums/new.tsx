import { CreateForum } from "@/components/actions/CreateForum";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/forums/new")({
  ssr: false,
  staticData: { adminLayout: true },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <CreateForum />
    </>
  );
}
