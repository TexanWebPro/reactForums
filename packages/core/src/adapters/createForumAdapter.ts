import { ReactForumsAdapter, ReactForumsAdapterInput } from "./types";

export function createForumAdapter(
  input: ReactForumsAdapterInput,
): ReactForumsAdapter {
  if (!input.forum) {
    throw new Error("createForumAdapter: 'forum' repository is required");
  }
  if (!input.thread) {
    throw new Error("createForumAdapter: 'thread' repository is required");
  }

  return {
    forum: input.forum,
    thread: input.thread,
  };
}
