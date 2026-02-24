import { ForumRepository } from "../repositories/ForumRepository";
import { ThreadRepository } from "../repositories/ThreadRepository";

export interface ReactForumsAdapter {
  forum: ForumRepository;
  thread: ThreadRepository;
}

export interface ReactForumsAdapterInput {
  forum: ForumRepository;
  thread: ThreadRepository;
}
