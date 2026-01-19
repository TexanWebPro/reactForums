import { Category } from "@/components/Category";
import { ForumTreeNode } from "@reactforums/core";

export function ForumDisplay(props: { forums: ForumTreeNode[] }) {
  const { forums } = props;
  return (
    <>
      {forums?.map((forum) => {
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
