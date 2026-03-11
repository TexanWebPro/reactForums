import Breadcrumbs from "@/components/Breadcrumbs";
import { Category } from "@/components/Category";
import { ForumComponent } from "@/components/Forum";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { forumQueries } from "@/features/forums/forums.query";
import { fetchForumById } from "@/features/forums/forums.api";

export const Route = createFileRoute("/forum/$forumId/")({
  loader: async ({ params }) => {
    const forum = await fetchForumById(Number(params.forumId));

    // build hierarchy
    const crumbs = [];
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

  const { data: forum } = useQuery({
    ...forumQueries.byId(Number(params.forumId)),
  });

  if (!forum) return;

  return (
    <div>
      <Breadcrumbs crumbs={crumbs} />
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
