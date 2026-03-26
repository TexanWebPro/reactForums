import { createFileRoute } from "@tanstack/react-router";
import { MessagesView } from "@/components/views/Messages";

export const Route = createFileRoute("/messages")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <MessagesView />
    </>
  );
}
