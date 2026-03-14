import { ForumTreeNode } from "@reactforums/core";
import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";
// import {useSortable} from '@dnd-kit/react/sortable';
// useSortable to allow drag and drop for displayOrder updating.

export function AdminForums(props: { forums: ForumTreeNode[] }) {
  const { forums } = props;

  return (
    <div className="flex flex-col gap-10 items-center justify-between">
      <div className="w-full bg-stone-200 flex flex-col rounded-lg text-sm">
        <span className="bg-sky-600 w-full p-4 py-2 font-bold text-stone-50 border-2 border-sky-800 rounded-t-lg flex flex-row items-center justify-between gap-2">
          <span>Forums</span>
          <Link to="/admin/forums/new">
            <Button className="border-2 border-black">
              <img
                src="/images/icons/plus-white.svg"
                alt="Create"
                className="h-4"
              />
              Add New
            </Button>
          </Link>
        </span>
        <div className="flex flex-col items-center justify-between text-sm p-4 border-2 border-t-0 border-stone-500 bg-stone-200 rounded-b-lg">
          {forums?.map((forum) => {
            return (
              <div key={forum.name + forum.id} className="w-full">
                {forum.isCategory && forum.children ? (
                  <CategoryDisplay
                    categoryId={forum.id}
                    categoryName={forum.name}
                    forums={forum.children}
                  />
                ) : (
                  <></>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function CategoryDisplay(props: {
  categoryId: number;
  categoryName: string;
  forums: ForumTreeNode[];
}) {
  const { categoryId, categoryName, forums } = props;

  return (
    <>
      <div className="w-full bg-stone-200 flex flex-col rounded-lg text-sm mb-4">
        <span className="bg-sky-600 w-full p-4 py-2 font-bold text-stone-50 border-2 border-sky-800 rounded-lg flex flex-row items-center justify-between gap-2">
          <span className="hover:underline text-lg">{categoryName}</span>
          <span>
            <Link to="/" className="text-sky-700 font-bold">
              <img
                src="/images/icons/pencil.svg"
                alt="Edit Forum"
                className="h-4"
              />
            </Link>
          </span>
        </span>
        {forums.map((board, i) => {
          return (
            <div
              key={`${board.name}-${board.id}`}
              className={`p-4 border-2 border-stone-600 m-4 rounded-lg flex flex-col items-start justify-between text-sm`}
            >
              <div className="w-full flex flex-row items-center justify-between">
                <span className="flex flex-col col-span-2 items-start justify-between">
                  <span className="flex flex-row items-center justify-between gap-4">
                    <span className="flex flex-col">
                      <span className="font-bold">{board.name}</span>
                    </span>
                  </span>
                </span>
                <span className="flex flex-col items-end justify-between">
                  <span>
                    <Link to="/" className="text-sky-700 font-bold">
                      <img
                        src="/images/icons/pencil.svg"
                        alt="Edit Forum"
                        className="h-4"
                      />
                    </Link>
                  </span>
                </span>
              </div>
              {board.children?.length ? (
                <>
                  <span className="flex flex-col p-4 flex-wrap items-start justify-between gap-4 w-full">
                    {board.children.map((childBoard) => {
                      return (
                        <span
                          key={childBoard.name + childBoard.id}
                          className="flex flex-row items-center justify-between w-full border-2 border-black p-4 rounded-lg font-bold"
                        >
                          <span>{childBoard.name}</span>
                          <span className="flex flex-col items-end justify-between">
                            <span>
                              <Link to="/" className="text-sky-700 font-bold">
                                <img
                                  src="/images/icons/pencil.svg"
                                  alt="Edit Forum"
                                  className="h-4"
                                />
                              </Link>
                            </span>
                          </span>
                        </span>
                      );
                    })}
                  </span>
                </>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
