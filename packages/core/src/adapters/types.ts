import { ForumRepository } from "../repositories/ForumRepository";
import { ThreadRepository } from "../repositories/ThreadRepository";
import { UserRepository } from "../repositories/UserRepository";

export interface ReactForumsAdapter {
  user: UserRepository;
  forum: ForumRepository;
  thread: ThreadRepository;
}

export interface ReactForumsAdapterInput {
  user: UserRepository;
  forum: ForumRepository;
  thread: ThreadRepository;
}
