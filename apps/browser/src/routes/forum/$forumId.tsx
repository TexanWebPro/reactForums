import { forumService } from "@/api/client";
import { Category } from "@/components/Category";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/forum/$forumId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { forumId } = Route.useParams();
  const forum = forumService.getForumById(Number(forumId));

  return (
    <div>
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
        <></>
      )}
    </div>
  );
}
