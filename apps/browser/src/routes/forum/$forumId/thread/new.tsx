import NewThread from "@/components/actions/NewThread";
import Breadcrumbs from "@/components/Breadcrumbs";
import { fetchForumById } from "@/features/forums/forums.api";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/forum/$forumId/thread/new")({
  loader: async ({ params }) => {
    const forum = await fetchForumById(Number(params.forumId));

    // build hierarchy
    const crumbs = [
      {
        label: "Post A New Thread",
        href: `/forum/${params.forumId}/thread/new`,
      },
    ];
    let current = forum;
    while (current) {
      crumbs.unshift({
        label: current.name,
        href: `/forum/${current.id}`,
      });
      current = current.parentForumId
        ? await fetchForumById(Number(current.parentForumId))
        : undefined;
    }

    return { params, crumbs };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { params, crumbs } = Route.useLoaderData();

  return (
    <>
      <Breadcrumbs crumbs={crumbs} />

      <NewThread forumId={params.forumId} />
    </>
  );
}
