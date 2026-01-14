import { postService, threadService, userService } from "@/api/client";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import {
  formatDateForPostInfoDisplay,
  formatDateTimeForForumDisplay,
} from "@reactforums/common/utils/dates";
import {
  reputationClassStyle,
  reputationSymbol,
  reputationWord,
} from "@reactforums/common/utils/reputation";
import type { Reputation, User } from "@reactforums/core";
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

  const repFromPosts = reputations.filter((rep) => rep.postId !== null);
  const repFromMembers = userInfo.reputation - repFromPosts.length;

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
                  <span
                    className={`font-bold ${reputationClassStyle(userInfo.reputation)}`}
                  >
                    {userInfo.reputation}
                  </span>
                </p>
                <span>
                  <p>
                    <span className="font-bold">Reputation from Members: </span>
                    <span className="font-bold text-green-700">
                      {repFromMembers}
                    </span>
                  </p>
                  <p>
                    <span className="font-bold">Reputation from Posts: </span>
                    <span className="font-bold text-green-700">
                      {repFromPosts.length}
                    </span>
                  </p>
                </span>
              </span>
            </span>
          </div>
          {reputations.map((reputation) => {
            return (
              <>
                <Reputation reputation={reputation} userInfo={userInfo} />
              </>
            );
          })}
        </div>

        <Button text="Rate User" linkTo="/" icon="thumbsUp" />
      </div>
    </>
  );
}

function Reputation(props: { reputation: Reputation; userInfo: User }) {
  const { reputation, userInfo } = props;
  const givingUser = userService.getUserInfo(reputation.givingUserId);
  const referencedPost = postService.getPostById(reputation.postId);
  const referencedThread =
    referencedPost && threadService.getThreadById(referencedPost.threadId);

  return (
    <>
      <div
        className={`flex w-full flex-col border-b-2 border-sky-800 p-4 gap-4 ${reputation.count > 0 ? "bg-green-200" : reputation.count < 0 ? "bg-red-200" : ""}`}
      >
        <div className="flex flex-row items-start justify-between">
          <span>
            <div>
              <span className="">
                {givingUser ? (
                  <>
                    <Link
                      to="/users/$userId"
                      params={{ userId: givingUser.username }}
                      className="hover:underline"
                    >
                      {givingUser?.username || "deleted"}
                    </Link>{" "}
                    <Link
                      to="/users/$userId/reputation"
                      params={{ userId: givingUser.username }}
                      className={`hover:underline font-bold ${reputationClassStyle(givingUser.reputation)}`}
                    >
                      ({givingUser.reputation})
                    </Link>
                  </>
                ) : (
                  <>
                    <span className="line-through">{"deleted"}</span>
                    {" 0"}
                  </>
                )}
              </span>{" "}
              {reputation.updatedAt ? (
                <span className="text-sm">
                  - Updated at{" "}
                  {formatDateTimeForForumDisplay(reputation.updatedAt)}
                </span>
              ) : (
                <></>
              )}
            </div>
            {referencedPost ? (
              <>
                <p className="text-xs">
                  Rating given for{" "}
                  <Link
                    to="/forum/$forumId/thread/$threadId/$postId"
                    params={{
                      forumId: referencedPost.forumId.toString(),
                      threadId: referencedPost.threadId.toString(),
                      postId: referencedPost.id.toString(),
                    }}
                    className="hover:underline"
                  >
                    {userInfo.username}'s post
                  </Link>{" "}
                  in{" "}
                  <Link
                    to="/forum/$forumId/thread/$threadId"
                    params={{
                      forumId: referencedPost.forumId.toString(),
                      threadId: referencedPost.threadId.toString(),
                    }}
                    className="hover:underline"
                  >
                    {referencedThread?.subject}
                  </Link>
                </p>
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
          {reputationWord(reputation.count)} (
          {reputationSymbol(reputation.count)}
          {reputation.count}): {reputation.comments || "[No comment]"}
        </span>
      </div>
    </>
  );
}
