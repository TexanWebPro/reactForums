import { Link } from "@tanstack/react-router";

export function SingleUserLatestTopics() {
  return (
    <div className="w-full bg-stone-200 flex flex-col rounded-lg text-sm">
      <span className="bg-sky-600 w-full p-4 py-2 font-bold text-stone-50 border-2 border-sky-800 rounded-t-lg flex flex-row items-center justify-start gap-2">
        Your Latest Topics
      </span>
      <div className="flex flex-col items-center justify-between text-sm border-2 border-t-0 border-stone-500 bg-stone-200 rounded-b-lg w-full">
        <div className="bg-stone-950 text-stone-50 font-bold px-4 py-2 w-full grid grid-cols-6">
          <span className="col-span-2">Topic</span>
          <span>Replies</span>
          <span>Views</span>
          <span>Rating</span>
          <span>Last Post</span>
        </div>
        <div className="px-4 py-2 grid grid-cols-6 w-full border-b-2 border-stone-300 items-center">
          <Link
            to="/forum/$forumId/thread/$threadId"
            params={{ forumId: "2", threadId: "1" }}
            className="col-span-2"
          >
            Single Topic
          </Link>
          <span>10</span>
          <span>1264</span>
          <span className="flex flex-row items-center">
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
          </span>
          <span className="flex flex-col">
            <span>Yesterday, 2:05 AM</span>
            <span className="text-xs">
              <Link
                to="/forum/$forumId/thread/$threadId"
                params={{ forumId: "2", threadId: "1" }}
                className="text-sky-700 hover:underline"
              >
                Last Post
              </Link>
              :{" "}
              <Link
                to="/users/$userId"
                params={{ userId: "Elegant-Totality" }}
                className="text-sky-700 hover:underline"
              >
                Elegant Totality
              </Link>
            </span>
          </span>
        </div>
        <div className="px-4 py-2 grid grid-cols-6 w-full border-b-2 border-stone-300 items-center">
          <Link
            to="/forum/$forumId/thread/$threadId"
            params={{ forumId: "2", threadId: "1" }}
            className="col-span-2"
          >
            Single Topic
          </Link>
          <span>10</span>
          <span>1264</span>
          <span className="flex flex-row items-center">
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
          </span>
          <span className="flex flex-col">
            <span>Yesterday, 2:05 AM</span>
            <span className="text-xs">
              <Link
                to="/forum/$forumId/thread/$threadId"
                params={{ forumId: "2", threadId: "1" }}
                className="text-sky-700 hover:underline"
              >
                Last Post
              </Link>
              :{" "}
              <Link
                to="/users/$userId"
                params={{ userId: "Elegant-Totality" }}
                className="text-sky-700 hover:underline"
              >
                Elegant Totality
              </Link>
            </span>
          </span>
        </div>
        <div className="px-4 py-2 grid grid-cols-6 w-full border-b-2 border-stone-300 items-center">
          <Link
            to="/forum/$forumId/thread/$threadId"
            params={{ forumId: "2", threadId: "1" }}
            className="col-span-2"
          >
            Single Topic
          </Link>
          <span>10</span>
          <span>1264</span>
          <span className="flex flex-row items-center">
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
          </span>
          <span className="flex flex-col">
            <span>Yesterday, 2:05 AM</span>
            <span className="text-xs">
              <Link
                to="/forum/$forumId/thread/$threadId"
                params={{ forumId: "2", threadId: "1" }}
                className="text-sky-700 hover:underline"
              >
                Last Post
              </Link>
              :{" "}
              <Link
                to="/users/$userId"
                params={{ userId: "Elegant-Totality" }}
                className="text-sky-700 hover:underline"
              >
                Elegant Totality
              </Link>
            </span>
          </span>
        </div>
        <div className="px-4 py-2 grid grid-cols-6 w-full border-b-2 border-stone-300 items-center">
          <Link
            to="/forum/$forumId/thread/$threadId"
            params={{ forumId: "2", threadId: "1" }}
            className="col-span-2"
          >
            Single Topic
          </Link>
          <span>10</span>
          <span>1264</span>
          <span className="flex flex-row items-center">
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
          </span>
          <span className="flex flex-col">
            <span>Yesterday, 2:05 AM</span>
            <span className="text-xs">
              <Link
                to="/forum/$forumId/thread/$threadId"
                params={{ forumId: "2", threadId: "1" }}
                className="text-sky-700 hover:underline"
              >
                Last Post
              </Link>
              :{" "}
              <Link
                to="/users/$userId"
                params={{ userId: "Elegant-Totality" }}
                className="text-sky-700 hover:underline"
              >
                Elegant Totality
              </Link>
            </span>
          </span>
        </div>
        <div className="px-4 py-2 grid grid-cols-6 w-full items-center">
          <Link
            to="/forum/$forumId/thread/$threadId"
            params={{ forumId: "2", threadId: "1" }}
            className="col-span-2"
          >
            Single Topic
          </Link>
          <span>10</span>
          <span>1264</span>
          <span className="flex flex-row items-center">
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
          </span>
          <span className="flex flex-col">
            <span>Yesterday, 2:05 AM</span>
            <span className="text-xs">
              <Link
                to="/forum/$forumId/thread/$threadId"
                params={{ forumId: "2", threadId: "1" }}
                className="text-sky-700 hover:underline"
              >
                Last Post
              </Link>
              :{" "}
              <Link
                to="/users/$userId"
                params={{ userId: "Elegant-Totality" }}
                className="text-sky-700 hover:underline"
              >
                Elegant Totality
              </Link>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
