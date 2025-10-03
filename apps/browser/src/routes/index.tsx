import { forumService } from "@/api/client";
import { Banners } from "@/components/Banner";
import { Category } from "@/components/Category";
import { Stats } from "@/components/Stats";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const allForums = forumService.listAllForumsByCategory();

  return (
    <>
      <div>
        <span className="text-sm font-bold">rF Community Forums</span>

        <div className="mt-4 w-full flex flex-col items-start justify-center gap-4">
          {allForums.map((forum) => {
            return (
              <>
                {forum.isCategory && forum.children ? (
                  <Category
                    categoryId={forum.id}
                    categoryName={forum.name}
                    categoryDescription={forum.description}
                    forums={forum.children}
                  />
                ) : (
                  <></>
                )}
              </>
            );
          })}
          <Stats />
          <ForumIconKey />
        </div>
      </div>
    </>
  );
}

function ForumIconKey() {
  return (
    <div className="flex flex-row items-center justify-start gap-4 text-sm">
      <span className="flex flex-row items-center gap-2">
        <img
          src="/images/icons/dot-filled-icon.svg"
          alt="New Replies"
          className="w-4"
        />
        Forum Has New Replies
      </span>
      <span className="flex flex-row items-center gap-2">
        <img
          src="/images/icons/dot-filled-icon-white.svg"
          alt="No New Replies"
          className="w-4"
        />
        Forum Has No New Replies
      </span>
      <span className="flex flex-row items-center gap-2">
        <img
          src="/images/icons/lock-closed.svg"
          alt="Locked Forum"
          className="w-4"
        />
        Forum is Locked
      </span>
    </div>
  );
}
