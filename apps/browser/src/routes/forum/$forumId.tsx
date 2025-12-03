import { forumService } from "@/api/client";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Category } from "@/components/Category";
import { Forum } from "@/components/Forum";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/forum/$forumId")({
  loader: async ({ params }) => {
    const forum = forumService.getForumById(Number(params.forumId));

    // build hierarchy
    const crumbs = [];
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

    return { forum, crumbs };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { forum, crumbs } = Route.useLoaderData();

  return (
    <div>
      <Breadcrumbs crumbs={crumbs} />
      {/* <pre>{JSON.stringify(forum, null, 2)}</pre> */}

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
          <Forum />
        </>
      )}
    </div>
  );
}
