import { forumService, threadService } from "@/api/client";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ThreadComponent } from "@/components/Thread";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/forum/$forumId/thread/$threadId")({
  loader: async ({ params }) => {
    const forum = forumService.getForumById(Number(params.forumId));
    const thread = threadService.getThreadById(Number(params.threadId));

    // build hierarchy
    const crumbs = [
      {
        label: String(thread?.subject),
        href: `/forum/${thread?.forumId}/thread/${thread?.id}`,
      },
    ];
    let current = forum;
    while (current) {
      crumbs.unshift({
        label: current.name,
        href: `/forum/${current.id}`,
      });
      current = current.parentForumId
        ? forumService.getForumById(current.parentForumId)
        : undefined;
    }

    return { thread, crumbs };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { thread, crumbs } = Route.useLoaderData();

  if (!thread) return;

  return (
    <div>
      <Breadcrumbs crumbs={crumbs} />
      <ThreadComponent thread={thread} />
    </div>
  );
}
