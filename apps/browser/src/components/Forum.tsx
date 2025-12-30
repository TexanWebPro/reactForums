import { Link } from "@tanstack/react-router";
import { Button } from "./ui/Button";
import { threadService } from "@/api/client";
import {
  formatDateTimeForForumDisplay,
  formatLastPostDateTime,
} from "@reactforums/common/utils/dates";

export function Forum() {
  const threads = threadService.getLastNThreadsInForum(2, 10);

  return (
    <div className="flex flex-col items-end justify-between gap-8">
      <Button text="New Topic" linkTo="/new-topic" />
      <div className="w-full bg-stone-200 flex flex-col rounded-lg text-sm">
        <div className="bg-sky-600 w-full p-4 py-2 font-bold text-stone-50 border-2 border-sky-800 rounded-t-lg flex flex-row items-center justify-between gap-2">
          <span className="text-lg">Forum Name</span>
          <span className="text-sm">
            <Link to="/" className="hover:underline">
              Mark Forum As Read
            </Link>
            {" | "}
            <Link to="/" className="hover:underline">
              Subscribe to Forum
            </Link>
          </span>
        </div>
        <div className="bg-stone-950 text-stone-50 font-bold px-4 py-2 w-full grid grid-cols-6">
          <span className="col-span-2">Topic / Author</span>
          <span>Replies</span>
          <span>Views</span>
          <span>Rating</span>
          <span>Last Post</span>
        </div>
        <div className="border-2 border-stone-300">
          {threads.length ? (
            <>
              {threads.map((thread, i) => {
                function starRating(rating: number) {
                  switch (rating) {
                    case 0:
                      return <></>;
                    case 1:
                      return (
                        <>
                          <img src="/images/star.png" alt="star" />
                        </>
                      );
                    case 2:
                      return (
                        <>
                          <img src="/images/star.png" alt="star" />
                          <img src="/images/star.png" alt="star" />
                        </>
                      );
                    case 3:
                      return (
                        <>
                          <img src="/images/star.png" alt="star" />
                          <img src="/images/star.png" alt="star" />
                          <img src="/images/star.png" alt="star" />
                        </>
                      );
                    case 4:
                      return (
                        <>
                          <img src="/images/star.png" alt="star" />
                          <img src="/images/star.png" alt="star" />
                          <img src="/images/star.png" alt="star" />
                          <img src="/images/star.png" alt="star" />
                        </>
                      );
                    case 5:
                      return (
                        <>
                          <img src="/images/star.png" alt="star" />
                          <img src="/images/star.png" alt="star" />
                          <img src="/images/star.png" alt="star" />
                          <img src="/images/star.png" alt="star" />
                          <img src="/images/star.png" alt="star" />
                        </>
                      );
                    default:
                      return <></>;
                  }
                }

                return (
                  <div key={thread.id}>
                    <div
                      className={`px-4 py-2 grid grid-cols-6 w-full items-center ${i === threads.length - 1 ? "" : "border-b-2 border-stone-300"}`}
                    >
                      <span className="flex flex-row col-span-2 items-center gap-4">
                        <span
                          className="thread_status newfolder"
                          title="New Posts"
                        >
                          &nbsp;
                        </span>
                        <span className="flex flex-col">
                          <Link
                            to="/forum/$forumId/thread/$threadId"
                            params={{ forumId: "2", threadId: "1" }}
                            className="text-sky-700 hover:underline font-bold"
                          >
                            {thread.subject}
                          </Link>

                          <span>
                            <Link
                              to="/"
                              className="text-sky-700 hover:underline"
                            >
                              {thread.username}
                            </Link>
                            <span className="text-xs">
                              ,{" "}
                              {formatDateTimeForForumDisplay(thread.createdAt)}
                            </span>
                          </span>
                        </span>
                      </span>
                      <span>{thread.replies}</span>
                      <span>{thread.views}</span>
                      <span className="flex flex-row items-center">
                        {starRating(
                          Math.floor(thread.ratingsTotal / thread.ratingsNumber)
                        )}
                      </span>
                      <span className="flex flex-col">
                        <span>
                          {formatLastPostDateTime(thread.lastPostCreatedAt)}
                        </span>
                        <span className="">
                          <Link to="/" className="text-sky-700 hover:underline">
                            Last Post
                          </Link>
                          :{" "}
                          <Link to="/" className="text-sky-700 hover:underline">
                            {thread.lastPosterUsername}
                          </Link>
                        </span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <>
              <p className="p-4">
                Sorry, but there are currently no threads in this forum with the
                specified date and time limiting options.
              </p>
            </>
          )}
        </div>
        <div className="bg-stone-200 text-stone-950 p-2 w-full border-2 border-t-0 border-stone-300 rounded-b-lg flex flex-row items-center justify-end">
          <span className="flex flex-row items-center justify-around gap-2">
            <select className="border-2 border-stone-300 bg-white px-2 p-1 rounded-lg">
              <option>Sort By: Last Post</option>
              <option>Sort By: Subject</option>
              <option>Sort By: Author</option>
              <option>Sort By: Creation Time</option>
              <option>Sort By: Rating</option>
              <option>Sort By: Replies</option>
              <option>Sort By: Views</option>
            </select>
            <select className="border-2 border-stone-300 bg-white px-2 p-1 rounded-lg">
              <option>Order: Descending</option>
              <option>Order: Ascending</option>
            </select>
            <select className="border-2 border-stone-300 bg-white px-2 p-1 rounded-lg">
              <option>From: The Beginning</option>
              <option>From: Last Year</option>
              <option>From: 100 Days Ago</option>
              <option>From: 75 Days Ago</option>
              <option>From: 50 Days Ago</option>
              <option>From: 20 Days Ago</option>
              <option>From: 10 Days Ago</option>
              <option>From: 5 Days Ago</option>
              <option>From: Today</option>
            </select>
            <button className="border-2 border-stone-500 bg-white px-2 p-1 rounded-lg hover:cursor-pointer">
              Submit
            </button>
          </span>
        </div>
      </div>

      <Button text="New Topic" linkTo="/new-topic" />
    </div>
  );
}
