import { useQuery } from "@tanstack/react-query";
import { PostContent } from "./PostContent";
import { UserInfoBar } from "./UserInfoBar";
import { PostOptions } from "./PostOptions";
import { UserSignatureInPost } from "./UserSignatureInPost";
import { userQueries } from "@/features/users/users.query";
import type { Post } from "@reactforums/core";

export function Post(post: Post) {
  const { userId } = post;

  const { data: userInfo } = useQuery({
    ...userQueries.byId(userId),
  });

  if (!userInfo) return;

  return (
    <>
      <div className="flex w-full flex-col border-b-2 border-sky-800">
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
        {post.includeSignature ? (
          <>
            <UserSignatureInPost signature={userInfo.signature} />
          </>
        ) : (
          <></>
        )}
        <PostOptions
          website={userInfo.website}
          userId={userInfo.id}
          postId={post.id}
        />
      </div>
    </>
  );
}
