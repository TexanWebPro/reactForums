import { userService } from "@/api/client";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import {
  formatDateForPostInfoDisplay,
  formatDateTimeForForumDisplay,
} from "@reactforums/common/utils/dates";
import type { Reputation } from "@reactforums/core";
import { createFileRoute, Link, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/users/$userId/reputation")({
  loader: async ({ params }) => {
    const user = userService.getUserByUsername(params.userId);
    if (!user) {
      throw redirect({
        to: "/",
      });
    }
    const reputations = userService.getUserReputations(user.id);
    const userInfo = userService.getUserInfo(user.id);
    return { reputations, userInfo };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { reputations, userInfo } = Route.useLoaderData();

  if (!userInfo) return;

  function userGroupStars(userGroup: string) {
    switch (userGroup) {
      case "Administrator":
        return (
          <>
            <img src="/images/star.png" alt="star" />
            <img src="/images/star.png" alt="star" />
            <img src="/images/star.png" alt="star" />
            <img src="/images/star.png" alt="star" />
            <img src="/images/star.png" alt="star" />
            <img src="/images/star.png" alt="star" />
            <img src="/images/star.png" alt="star" />
          </>
        );
      default:
        break;
    }
  }

  return (
    <>
      <Breadcrumbs crumbs={[]} />
      <div className="flex flex-col items-end justify-center">
        <Button text="Rate User" linkTo="/" icon="thumbsUp" />
        <span className="bg-sky-600 w-full p-4 py-2 mt-4 font-bold text-stone-50 border-2 border-sky-800 rounded-t-lg flex flex-row items-center justify-between gap-2">
          <p>Reputation of Elegant Totality</p>
          <span className="flex flex-row justify-end text-gray-900">
            <select className="border-2 border-stone-300 bg-white px-2 p-1 rounded-lg text-xs">
              <option>Trend: Last Week</option>
              <option>Trend: Last Month</option>
              <option>Trend: Last 6 Months</option>
              <option>Trend: All Time</option>
            </select>
          </span>
        </span>
        <div className="flex w-full flex-col mb-4 border-2 border-sky-800 border-t-0 rounded-b-lg">
          <div className="flex flex-col items-center justify-between text-sm p-4 border-b-2 border-stone-500 bg-stone-200">
            <span className="flex flex-row items-center justify-between text-sm w-full">
              <span className="flex flex-row items-center justify-around gap-4">
                <img
                  src="/images/default_avatar.jpg"
                  alt="Elegant Totality Avatar"
                  className="w-16 border-2 border-stone-300"
                />

                <span className="flex flex-col items-start">
                  <Link
                    to="/users/$userId"
                    params={{ userId: userInfo.username }}
                    className="text-lg text-green-800 font-bold hover:underline"
                  >
                    {userInfo.username}
                  </Link>
                  <span className="italic">{userInfo.userTitle}</span>
                  <span className="flex flex-row items-center justify-between gap-1 mb-4">
                    {userGroupStars(userInfo.primaryUserGroup)}
                  </span>
                </span>
              </span>
              <span className="text-xs">
                <span>
                  <p>
                    <span className="font-bold">Posts:</span>{" "}
                    {userInfo.postCount}
                  </p>
                  <p>
                    <span className="font-bold">Threads:</span>{" "}
                    {userInfo.threadCount}
                  </p>
                  <p>
                    <span className="font-bold">Joined:</span>{" "}
                    {formatDateForPostInfoDisplay(userInfo.registrationDate)}
                  </p>
                </span>
              </span>
            </span>

            <span className="flex flex-row items-center justify-between text-sm w-full">
              <span className="flex flex-col gap-2">
                <p>
                  <span className="font-bold">Total Reputation: </span>
                  <span className="font-bold text-green-700">100</span>
                </p>
                <span>
                  <p>
                    <span className="font-bold">Reputation from Members: </span>
                    <span className="font-bold text-green-700">33</span>
                  </p>
                  <p>
                    <span className="font-bold">Reputation from Posts: </span>
                    <span className="font-bold text-green-700">67</span>
                  </p>
                </span>
              </span>
              <span className="flex flex-col gap-2">
                <div className="flex flex-row items-center justify-between gap-4">
                  <span>+124 Positive</span> <span>72%</span> <span>↑ 5%</span>
                </div>
                <div className="flex flex-row items-center justify-between gap-4">
                  <span>12 Neutral</span> <span>7%</span> <span>-</span>
                </div>
                <div className="flex flex-row items-center justify-between gap-4">
                  <span>-36 Negative</span> <span>21%</span> <span>↑ 4%</span>
                </div>
              </span>
            </span>
          </div>
          {reputations.map((reputation) => {
            return (
              <>
                <Reputation {...reputation} />
              </>
            );
          })}
        </div>

        <Button text="Rate User" linkTo="/" icon="thumbsUp" />
      </div>
    </>
  );
}

function Reputation(reputation: Reputation) {
  const givingUser = userService.getUserInfo(reputation.givingUserId);
  return (
    <>
      <div
        className={`flex w-full flex-col border-b-2 border-sky-800 p-4 ${reputation.count > 0 ? "bg-green-200" : reputation.count < 0 ? "bg-red-200" : ""}`}
      >
        <div className="flex flex-row items-center justify-between">
          <span>
            <div>
              <span className="font-bold">
                <span
                  className={`${givingUser === undefined ? "line-through" : ""}`}
                >
                  {givingUser?.username || "deleted"}
                </span>{" "}
                ({givingUser?.reputation || 0})
              </span>{" "}
              {reputation.updatedAt ? (
                <>
                  - Updated at{" "}
                  {formatDateTimeForForumDisplay(reputation.updatedAt)}
                </>
              ) : (
                <></>
              )}
            </div>
            {reputation.postId ? (
              <>
                <div className="text-xs">
                  Rating given for Elegant Totality's post in thread
                </div>
              </>
            ) : (
              <></>
            )}
          </span>

          <Link
            to="/report"
            className="text-red-700 border-2 border-red-700 bg-stone-200 hover:bg-stone-300 text-center p-2 flex flex-row items-center justify-center gap-2 w-18 rounded-lg text-sm"
          >
            <img src="/images/icons/flag.svg" alt="Report" className="w-4" />
            Report
          </Link>
        </div>

        <span>
          Positive ({reputation.count}): {reputation.comments}
        </span>
      </div>
    </>
  );
}
