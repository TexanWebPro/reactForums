import { createFileRoute } from "@tanstack/react-router";
import { UserDashboardView } from "../views/UserDashboard";

export const Route = createFileRoute("/user-dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <UserDashboardView />
    </>
  );
}
