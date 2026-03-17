import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Post } from "@/components/posts/Post";
import { Button } from "./Button";
import { postQueries } from "@/features/posts/posts.query";
import type { Thread } from "@reactforums/core";
import QuickReply from "./actions/QuickReply";

export function ThreadComponent(props: { thread: Thread }) {
  const { thread } = props;
  const postsPerPage = 10;

  const { data: posts } = useQuery({
    ...postQueries.byThreadId(thread.id, postsPerPage),
  });

  if (!thread) return;
  if (!posts) return;

  return (
    <div className="flex flex-col items-end justify-between">
      <Button
        text="New Reply"
        linkTo="/forum/$forumId/thread/reply"
        params={{ forumId: thread.forumId }}
      />

      <span className="bg-sky-600 w-full p-4 py-2 mt-4 font-bold text-stone-50 border-2 border-sky-800 rounded-t-lg flex flex-row items-center justify-start gap-2">
        {thread.subject}
      </span>
      <div className="flex w-full flex-col mb-4 border-2 border-sky-800 border-t-0 rounded-b-lg">
        {posts.map((post) => {
          return (
            <React.Fragment key={`${post.forumId}-${post.threadId}-${post.id}`}>
              <Post {...post} />
            </React.Fragment>
          );
        })}
      </div>

      <Button
        text="New Reply"
        linkTo="/forum/$forumId/thread/reply"
        params={{ forumId: thread.forumId }}
      />
      <QuickReply />
    </div>
  );
}
