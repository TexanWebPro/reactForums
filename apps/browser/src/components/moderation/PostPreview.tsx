import { Post } from "@reactforums/core";
import { PostContent } from "../posts/PostContent";
import { UserInfoBar } from "../posts/UserInfoBar";
import { useQuery } from "@tanstack/react-query";
import { userQueries } from "@/features/users/users.query";

export function PostPreview(post: Post) {
  const { userId } = post;

  const { data: userInfo } = useQuery({
    ...userQueries.byId(userId),
  });

  if (!userInfo) return;

  return (
    <>
      <div
        className="flex w-full flex-col border-b-2 border-sky-800"
        id={post.id.toString()}
      >
        <UserInfoBar
          username={post.username}
          userTitle={String(userInfo.userTitle)}
          userGroup={userInfo.primaryUserGroup}
          posts={userInfo.postCount}
          threads={userInfo.threadCount}
          joined={userInfo.registrationDate}
          reputation={userInfo.reputation}
          warning={userInfo.warningPoints}
        />
        <PostContent
          createdAt={post.createdAt}
          editUserId={post.editUserId}
          updatedAt={post.updatedAt}
          content={post.content}
        />
      </div>
    </>
  );
}
