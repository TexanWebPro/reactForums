import { userService } from "@/api/client";
import { formatDateForPostInfoDisplay } from "@reactforums/common/utils/dates";
import type { Post } from "@reactforums/core";
import { Link } from "@tanstack/react-router";

export function Post(post: Post) {
  const { userId } = post;
  const userInfo = userService.getUserInfo(userId);

  if (!userInfo) return;
  return (
    <>
      {/* <pre>{JSON.stringify(userInfo, null, 2)}</pre> */}
      <div className="flex w-full flex-col border-b-2 border-sky-800">
        <UserInfoBar
          username={post.username}
          userTitle={userInfo.userTitle}
          userGroup={userInfo.primaryUserGroup}
          posts={userInfo.postCount}
          threads={userInfo.threadCount}
          joined={userInfo.registrationDate}
          reputation={userInfo.reputation}
          warning={userInfo.warningPoints}
        />
        <PostContent
          createdAt={post.createdAt}
          editedBy="Elegant Totality"
          updatedAt={post.editedAt}
          content={post.content}
        />
        {post.includeSignature ? (
          <>
            <UserSignatureInPost signature={userInfo.signature} />
          </>
        ) : (
          <></>
        )}
        <PostOptions website={userInfo.website} />
      </div>
    </>
  );
}

function UserInfoBar(props: {
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
                className="font-bold text-green-700 hover:underline"
              >
                +{reputation}
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

function PostContent(props: {
  createdAt: Date;
  editedBy?: string;
  updatedAt?: Date;
  content: string;
}) {
  const { createdAt, editedBy, updatedAt, content } = props;

  return (
    <>
      <span className="m-4 text-xs border-b-2 border-stone-400">
        {createdAt.toDateString()}

        {editedBy && updatedAt ? (
          <>
            {" "}
            (This post was last modified: {updatedAt.toDateString()} by{" "}
            {editedBy}.)
          </>
        ) : (
          <></>
        )}
      </span>
      <div className="p-4 text-base">{content}</div>
    </>
  );
}

function UserSignatureInPost(props: { signature?: string }) {
  const { signature } = props;
  return (
    <>
      {signature ? (
        <>
          <div className="border-t-2 border-stone-400 m-4 pt-4">
            {signature}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

function PostOptions(props: {
  website: string;
  userId: string;
  postId: number;
}) {
  const { website, userId, postId } = props;

  return (
    <div className="border-t-2 border-stone-400 p-4 flex flex-row items-center justify-between gap-2">
      <span className="flex flex-row justify-between items-center gap-2 w-1/5">
        {website ? (
          <a
            href={`https://${website}`}
            target="_blank"
            className="flex flex-row items-center justify-center gap-1 p-2 bg-stone-200 text-stone-950 font-bold border-2 border-stone-300 hover:bg-stone-300 text-center w-full rounded-lg text-sm"
          >
            <img
              src="/images/icons/globe-alt.svg"
              alt="Website"
              className="w-5"
            />
            Website
          </a>
        ) : (
          <></>
        )}
        <Link
          to="/search"
          className="flex flex-row flex-nowrap items-center justify-center w-full max-w-32 p-2 bg-stone-200 text-stone-950 font-bold border-2 border-stone-300 hover:bg-stone-300 text-center rounded-lg text-sm"
        >
          <img
            src="/images/icons/magnifying-glass.svg"
            alt="Find Posts"
            className="w-5"
          />
          Find Posts
        </Link>
      </span>
      <span className="flex flex-row justify-between items-center gap-2">
        <Link
          to="/"
          className="flex flex-row items-center justify-center gap-1 w-full p-2 bg-stone-200 text-stone-950 font-bold border-2 border-stone-300 hover:bg-stone-300 text-center rounded-lg text-sm"
        >
          <img src="/images/icons/pencil.svg" alt="Edit" className="w-5" />
          Edit
        </Link>
        <Link
          to="/"
          className="flex flex-row items-center justify-center gap-1 w-full p-2 bg-stone-200 text-stone-950 font-bold border-2 border-stone-300 hover:bg-stone-300 text-center rounded-lg text-sm"
        >
          <img src="/images/icons/x-mark.svg" alt="Delete" className="w-5" />
          Delete
        </Link>
        <Link
          to="/"
          className="flex flex-row items-center justify-center gap-1 w-full p-2 bg-stone-200 text-stone-950 font-bold border-2 border-stone-300 hover:bg-stone-300 text-center rounded-lg text-sm"
        >
          <img
            src="/images/icons/chat-bubble-left-ellipsis.svg"
            alt="Reply"
            className="w-5"
          />
          Reply
        </Link>
        <Link
          to="/"
          className="flex flex-row items-center justify-center gap-1 w-full p-2 bg-stone-200 text-stone-950 font-bold border-2 border-stone-300 hover:bg-stone-300 text-center rounded-lg text-sm"
        >
          <img
            src="/images/icons/chat-bubble-left-right.svg"
            alt="Quote"
            className="w-5"
          />
          Quote
        </Link>
      </span>
    </div>
  );
}
