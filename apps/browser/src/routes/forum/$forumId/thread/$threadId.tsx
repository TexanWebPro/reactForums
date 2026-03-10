// import Breadcrumbs from "@/components/Breadcrumbs";
import { ThreadComponent } from "@/components/Thread";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { threadQueries } from "@/features/threads/threads.query";

export const Route = createFileRoute("/forum/$forumId/thread/$threadId")({
  loader: async ({ params }) => {
    //   const forum = await forumService.getBreadcrumbForumHierarchy(
    //     Number(params.forumId),
    //   );
    //   const thread = threadService.getThreadById(Number(params.threadId));

    //   // build hierarchy
    //   const crumbs = [
    //     {
    //       label: String(thread?.subject),
    //       href: `/forum/${thread?.forumId}/thread/${thread?.id}`,
    //     },
    //   ];
    //   let current = forum;
    //   while (current) {
    //     crumbs.unshift({
    //       label: current.name,
    //       href: `/forum/${current.id}`,
    //     });
    //     current = current.parentForumId
    //       ? await forumService.getBreadcrumbForumHierarchy(current.parentForumId)
    //       : undefined;
    //   }

    return { params };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { params } = Route.useLoaderData();

  const { data: thread } = useQuery({
    ...threadQueries.byId(Number(params.threadId)),
  });

  if (!thread) return;

  return (
    <div>
      {/* <Breadcrumbs crumbs={crumbs} /> */}
      <ThreadComponent thread={thread} />
    </div>
  );
}
