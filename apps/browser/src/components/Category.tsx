import { ForumTreeNode } from "@reactforums/core";
import { Link } from "@tanstack/react-router";
// import { formatDistance, subDays } from "date-fns";

type ForumForDisplay = {
  forumName: string;
  forumDescription: string;
  newReplies: boolean;
  locked: boolean;
  topics: number;
  replies: number;
  recentlyUpdatedTopic: {
    topicName: string;
    lastChanged: Date;
    userWhoUpdatedTopic: {
      username: string;
      link: string;
    };
  };
};

export function Category(props: {
  categoryName: string;
  categoryDescription: string;
  forums: ForumTreeNode[];
}) {
  const { categoryName, categoryDescription, forums } = props;
  return (
    <>
      <div className="w-full bg-stone-200 flex flex-col rounded-lg text-sm">
        <span className="bg-sky-600 w-full p-4 py-2 font-bold text-stone-50 border-2 border-sky-800 rounded-t-lg flex flex-row items-center justify-start gap-2">
          <Link to="/" className="hover:underline text-lg">
            {categoryName}
          </Link>
          <span className="text-sm">{categoryDescription}</span>
        </span>

        {forums.map((board, i) => {
          return (
            <>
              <div
                className={`${
                  i === 0
                    ? "border-y-0" // no top/bottom border for first entry
                    : i === forums.length - 1
                      ? "rounded-b-lg border-t-0" // border rounded for last entry
                      : "" // border for all others
                } p-4 border-2 border-stone-300 flex flex-row items-center justify-between text-sm`}
                key={`${board.name}-${i}`}
              >
                <span className="flex flex-col items-start justify-between w-5/7">
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
                    <span>
                      <span className="font-bold">
                        <Link
                          to="/"
                          className="hover:underline text-base flex flex-row items-center gap-1"
                        >
                          {board.name}
                        </Link>
                      </span>
                      <span>{board.description}</span>
                    </span>
                  </span>
                </span>
                <span className="flex flex-col items-center justify-between">
                  <span>{board.threadCount} Threads</span>
                  <span>{board.postCount} Posts</span>
                </span>
                <span className="flex flex-col items-end justify-between">
                  <span>
                    <Link to="/" className="text-sky-700 font-bold">
                      {board.lastPostThreadSubject}
                    </Link>
                  </span>
                  <span>
                    {/* TODO: fix date formatting */}
                    date here
                  </span>
                  <span>
                    by{" "}
                    <Link to={board.lastPostAuthor} className="text-sky-700">
                      {board.lastPostAuthor}
                    </Link>
                  </span>
                </span>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
