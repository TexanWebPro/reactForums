// import { postService } from "@/api/client";
import { Post } from "./Post";
import { Button } from "./ui/Button";
import type { Thread } from "@reactforums/core";

export function ThreadComponent(props: { thread: Thread }) {
  const { thread } = props;
  // const posts = postService.getNPostsInThread(thread.id, 10);

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
        {/* {posts.map((post) => {
          return (
            <>
              <Post {...post} />
            </>
          );
        })} */}
      </div>

      <Button
        text="New Reply"
        linkTo="/forum/$forumId/thread/reply"
        params={{ forumId: thread.forumId }}
      />
    </div>
  );
}
