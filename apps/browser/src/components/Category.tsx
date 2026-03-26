import { formatDateTimeForForumDisplay } from "@reactforums/common/utils/dates";
import { ForumTreeNode } from "@reactforums/core";
import { Link } from "@tanstack/react-router";

export function Category(props: {
  categoryId: number;
  categoryName: string;
  categoryDescription: string;
  forums: ForumTreeNode[];
}) {
  const { categoryId, categoryName, categoryDescription, forums } = props;

  return (
    <>
      <div className="w-full bg-stone-200 flex flex-col rounded-lg text-sm mb-4">
        <span className="bg-sky-600 w-full p-4 py-2 font-bold text-stone-50 border-2 border-sky-800 rounded-t-lg flex flex-row items-center justify-start gap-2">
          <Link
            to="/forum/$forumId"
            params={{ forumId: categoryId.toString() }}
            className="hover:underline text-lg"
          >
            {categoryName}
          </Link>
          <span className="text-sm">{categoryDescription}</span>
        </span>

        {forums.map((board, i) => {
          const isFirst = i === 0;
          const isLast = i === forums.length - 1;
          const isOnly = forums.length === 1;

          return (
            <div key={`${board.name}-${board.id}`}>
              <div
                className={`${
                  isOnly
                    ? "rounded-b-lg border-t-0"
                    : isFirst
                      ? "border-y-0" // no top/bottom border for first entry
                      : isLast
                        ? "rounded-b-lg border-t-0" // border rounded for last entry
                        : "" // border for all others
                } p-4 border-2 border-stone-300 grid grid-cols-4 items-center justify-between text-sm`}
              >
                <span className="flex flex-col col-span-2 items-start justify-between">
                  <span className="flex flex-row items-center justify-between gap-4">
                    {board.isLocked ? (
                      <img
                        src="/images/icons/lock-closed.svg"
                        alt="Locked Forum"
                        className="w-5"
                      />
                    ) : (
                      // ) : board.newReplies ? (
                      //   <>
                      //     <img
                      //       src="/images/icons/dot-filled-icon.svg"
                      //       alt="New Replies"
                      //       className="w-4"
                      //     />
                      //   </>
                      <>
                        <img
                          src="/images/icons/dot-filled-icon-white.svg"
                          alt="No New Replies"
                          className="w-4"
                        />
                      </>
                    )}
                    <span className="flex flex-col">
                      <span className="font-bold">
                        <Link
                          to="/forum/$forumId"
                          params={{ forumId: board.id.toString() }}
                          className="hover:underline text-base flex flex-row items-center gap-1"
                        >
                          {board.name}
                        </Link>
                      </span>
                      <span>{board.description}</span>
                      <span className="flex flex-row gap-4 flex-wrap items-center justify-between">
                        {board.children ? (
                          board.children.map((childBoard) => {
                            return (
                              <span key={childBoard.name + childBoard.id}>
                                <span className="flex flex-row gap-1 text-xs mt-2 font-bold">
                                  {childBoard.isLocked ? (
                                    <img
                                      src="/images/icons/lock-closed.svg"
                                      alt="Locked Forum"
                                      className="w-3"
                                    />
                                  ) : (
                                    // ) : childBoard.newReplies ? (
                                    //   <>
                                    //     <img
                                    //       src="/images/icons/dot-filled-icon.svg"
                                    //       alt="New Replies"
                                    //       className="w-3"
                                    //     />
                                    //   </>
                                    <>
                                      <img
                                        src="/images/icons/dot-filled-icon-white.svg"
                                        alt="No New Replies"
                                        className="w-3"
                                      />
                                    </>
                                  )}
                                  <Link
                                    to="/forum/$forumId"
                                    params={{
                                      forumId: childBoard.id.toString(),
                                    }}
                                    className="hover:underline"
                                  >
                                    {childBoard.name}
                                  </Link>
                                </span>
                              </span>
                            );
                          })
                        ) : (
                          <></>
                        )}
                      </span>
                    </span>
                  </span>
                </span>
                <span className="flex flex-col items-center justify-between">
                  <span>{board.threadCount} Threads</span>
                  <span>{board.postCount} Posts</span>
                </span>
                <span className="flex flex-col items-end justify-between">
                  {!board.threadCount && board.lastPostTime === null ? (
                    <>
                      <span>No Posts</span>
                    </>
                  ) : (
                    <>
                      <span>
                        <Link to="/" className="text-sky-700 font-bold">
                          {board.lastPostThreadSubject}
                        </Link>
                      </span>
                      <span>
                        {board.lastPostTime ? (
                          formatDateTimeForForumDisplay(board.lastPostTime)
                        ) : (
                          <></>
                        )}
                      </span>
                      <span>
                        by{" "}
                        <Link
                          to={board.lastPostAuthor || ""}
                          className="text-sky-700"
                        >
                          {board.lastPostAuthor}
                        </Link>
                      </span>
                    </>
                  )}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
