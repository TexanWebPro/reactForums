// import { forumService } from "@/api/client";
// import Breadcrumbs from "@/components/Breadcrumbs";
import { Category } from "@reactforums/common/components/Category";
import { ForumComponent } from "@reactforums/common/components/Forum";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ForumTreeNode } from "@reactforums/core";

export const Route = createFileRoute("/forum/$forumId/")({
  loader: async ({ params }) => {
    // const forum = await forumService.getBreadcrumbForumHierarchy(
    //   Number(params.forumId),
    // );

    // // build hierarchy
    // const crumbs = [];
    // let current = forum;
    // while (current) {
    //   crumbs.unshift({
    //     label: current.name,
    //     href: `/forum/${current.id}`,
    //   });
    //   current = current.parentForumId
    //     ? await forumService.getBreadcrumbForumHierarchy(current.parentForumId)
    //     : undefined;
    // }

    return { params };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { params } = Route.useLoaderData();
  async function fetchThreadsByForumId(id: string): Promise<ForumTreeNode> {
    const res = await fetch(
      `/api/forums/query/by-id?id=${encodeURIComponent(id)}`,
    );
    const body = await res.json().catch(() => null);

    if (!res.ok)
      throw new Error(body?.error ?? `Request failed (${res.status})`);
    return body as ForumTreeNode;
  }

  const { data: forum } = useQuery({
    queryKey: [`forum-${params.forumId}-thread-list`],
    queryFn: async () => {
      const res = await fetchThreadsByForumId(params.forumId);
      return res;
    },
  });

  if (!forum) return;

  return (
    <div>
      {/* <Breadcrumbs crumbs={crumbs} /> */}
      {forum?.isCategory && forum.children ? (
        <>
          <Category
            categoryId={forum.id}
            categoryName={forum.name}
            categoryDescription={forum.description}
            forums={forum.children}
          />
        </>
      ) : (
        <>
          {forum && forum.children && Number(forum.children.length) > 0 ? (
            <>
              <Category
                categoryId={forum.id}
                categoryName={forum.name}
                categoryDescription={forum.description}
                forums={forum.children}
              />
            </>
          ) : (
            <></>
          )}
          {forum ? <ForumComponent {...forum} /> : <></>}
        </>
      )}
    </div>
  );
}
