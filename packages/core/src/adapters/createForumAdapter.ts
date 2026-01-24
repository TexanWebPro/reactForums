import { ReactForumsAdapter, ReactForumsAdapterInput } from "./types";

export function createForumAdapter(
  input: ReactForumsAdapterInput,
): ReactForumsAdapter {
  if (!input.forum) {
    throw new Error("createForumAdapter: 'forum' repository is required");
  }

  return {
    forum: input.forum,
  };
}
