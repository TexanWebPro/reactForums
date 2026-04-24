import React from "react";
import { useQuery } from "@tanstack/react-query";
import { postQueries } from "@/features/posts/posts.query";
import type { Thread } from "@reactforums/core";
import { PostPreview } from "./PostPreview";

export function ThreadPreview(props: { thread: Thread }) {
  const { thread } = props;
  const postsPerPage = 1;

  const { data: posts } = useQuery({
    ...postQueries.byThreadId(thread.id, postsPerPage),
  });

  if (!thread) return;
  if (!posts) return;

  return (
    <div className="flex flex-col items-end justify-between">
      <span className="bg-sky-600 w-full p-4 py-2 mt-4 font-bold text-stone-50 border-2 border-sky-800 rounded-t-lg flex flex-row items-center justify-start gap-2">
        {thread.subject}
      </span>
      <div className="flex w-full flex-col mb-4 border-2 border-sky-800 border-t-0 rounded-b-lg">
        {posts.map((post) => {
          return (
            <React.Fragment key={`${post.forumId}-${post.threadId}-${post.id}`}>
              <PostPreview {...post} />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
