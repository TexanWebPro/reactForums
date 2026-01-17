import { forumService } from "@/api/client";
// import { Banners } from "@/components/Banner";
import { Category } from "@/components/Category";
import { Stats } from "@/components/Stats";
import { useQuery } from "@tanstack/react-query";

export function ForumDisplay() {
  const { isPending, error, data } = useQuery({
    queryKey: ["forumsForDisplay"],
    queryFn: () => forumService.listAllForumsByCategory(),
  });

  if (isPending) {
    return <>LOADING</>;
  }

  if (error) {
    return <>ERROR</>;
  }

  return (
    <>
      {data?.map((forum) => {
        return (
          <div key={forum.name + forum.id} className="w-full">
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
          </div>
        );
      })}
    </>
  );
}
