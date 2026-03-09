import { ReactForumsAdapter, ReactForumsAdapterInput } from "./types";

export function createForumAdapter(
  input: ReactForumsAdapterInput,
): ReactForumsAdapter {
  if (!input.setting) {
    throw new Error("createForumAdapter: 'setting' repository is required");
  }
  if (!input.user) {
    throw new Error("createForumAdapter: 'user' repository is required");
  }
  if (!input.forum) {
    throw new Error("createForumAdapter: 'forum' repository is required");
  }
  if (!input.thread) {
    throw new Error("createForumAdapter: 'thread' repository is required");
  }
  if (!input.post) {
    throw new Error("createForumAdapter: 'post' repository is required");
  }

  return {
    setting: input.setting,
    user: input.user,
    forum: input.forum,
    thread: input.thread,
    post: input.post,
  };
}
