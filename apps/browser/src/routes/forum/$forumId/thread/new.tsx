import NewThread from "@/components/actions/NewThread";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/forum/$forumId/thread/new")({
  loader: ({ params }) => {
    return { params };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { params } = Route.useLoaderData();

  return (
    <div>
      <NewThread forumId={params.forumId} />
    </div>
  );
}
