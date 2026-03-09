// import { userService } from "@/api/client";
import type { Post, User } from "@reactforums/core";
import { PostContent } from "./PostContent";
import { useQuery } from "@tanstack/react-query";
import { UserInfoBar } from "./UserInfoBar";
import { PostOptions } from "./PostOptions";
import { UserSignatureInPost } from "./UserSignatureInPost";

export function Post(post: Post) {
  const { userId } = post;
  async function fetchUserById(id: number): Promise<User> {
    const res = await fetch(
      `/api/users/query/by-id?id=${encodeURIComponent(id)}`,
    );
    const body = await res.json().catch(() => null);

    if (!res.ok)
      throw new Error(body?.error ?? `Request failed (${res.status})`);
    return body as User;
  }

  const { data: userInfo } = useQuery({
    queryKey: [`user-${userId}`],
    queryFn: async () => {
      const res = await fetchUserById(userId);
      return res;
    },
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
