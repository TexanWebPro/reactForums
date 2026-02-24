// import { forumService, threadService } from "@/api/client";
// import Breadcrumbs from "@/components/Breadcrumbs";
import { ThreadComponent } from "@reactforums/common/components/Thread";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";

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
  const { data } = useQuery({
    queryKey: [`thread-${params.threadId}`],
    queryFn: async () => {
      const res = await fetch("/api/threads/query/by-id");
      return res.json();
    },
  });

  if (!data) return;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {/* <Breadcrumbs crumbs={crumbs} /> */}
      {/* <ThreadComponent thread={data} /> */}
    </div>
  );
}
