import Breadcrumbs from "@/components/Breadcrumbs";
import { ThreadComponent } from "@/components/Thread";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { threadQueries } from "@/features/threads/threads.query";
import { fetchForumById } from "@/features/forums/forums.api";
import { fetchThreadById } from "@/features/threads/threads.api";

export const Route = createFileRoute("/forum/$forumId/thread/$threadId")({
  loader: async ({ params }) => {
    const forum = await fetchForumById(Number(params.forumId));
    const thread = await fetchThreadById(Number(params.threadId));

    // build hierarchy
    const crumbs = [
      {
        label: String(thread.subject),
        href: `/forum/${thread.forumId}/thread/${thread.id}`,
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

  const { data: thread } = useQuery({
    ...threadQueries.byId(Number(params.threadId)),
  });

  if (!thread) return;

  return (
    <div>
      <Breadcrumbs crumbs={crumbs} />
      <ThreadComponent thread={thread} />
    </div>
  );
}
