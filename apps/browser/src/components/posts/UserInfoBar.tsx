import { Link } from "@tanstack/react-router";
import { formatDateForPostInfoDisplay } from "../../../../common/utils/dates";
import { reputationClassStyle } from "../../../../common/utils/reputation";

export function UserInfoBar(props: {
  username: string;
  userTitle: string;
  userGroup: string;
  posts: number;
  threads: number;
  joined: Date;
  reputation: number;
  warning: number;
}) {
  const {
    username,
    userTitle,
    userGroup,
    posts,
    threads,
    joined,
    reputation,
    warning,
  } = props;

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
      <div className="flex flex-row items-center justify-between text-sm p-4 border-b-2 border-stone-500 bg-stone-200">
        <span className="flex flex-row items-center justify-around gap-4">
          <img
            src="/images/default_avatar.jpg"
            alt="Elegant Totality Avatar"
            className="w-16 border-2 border-stone-300"
          />
          <span className="flex flex-col items-start">
            <Link
              to="/users/$userId"
              params={{ userId: username }}
              className="text-lg text-green-800 font-bold hover:underline"
            >
              {username}
            </Link>
            <span className="italic">{userTitle}</span>
            <span className="flex flex-row items-center justify-between gap-1 mb-4">
              {userGroupStars(userGroup)}
            </span>
          </span>
        </span>
        <span className="text-xs">
          <span>
            <p>
              <span className="font-bold">Posts:</span> {posts}
            </p>
            <p>
              <span className="font-bold">Threads:</span> {threads}
            </p>
            <p>
              <span className="font-bold">Joined:</span>{" "}
              {formatDateForPostInfoDisplay(joined)}
            </p>
            <p>
              <span className="font-bold">Reputation:</span>{" "}
              <Link
                to="/users/$userId/reputation"
                params={{ userId: username }}
                className={`font-bold hover:underline ${reputationClassStyle(reputation)}`}
              >
                {reputation}
              </Link>
            </p>
            <p>
              {/* TODO: Viewable only to Mods and Admins */}
              <span className="font-bold">Warning Level:</span>{" "}
              <span className="font-bold text-red-700">{warning}%</span>
            </p>
          </span>
        </span>
      </div>
    </>
  );
}
