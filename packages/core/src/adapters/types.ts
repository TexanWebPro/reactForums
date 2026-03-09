import { ForumRepository } from "../repositories/ForumRepository";
import { PostRepository } from "../repositories/PostRepository";
import { SettingsRepository } from "../repositories/SettingsRepository";
import { ThreadRepository } from "../repositories/ThreadRepository";
import { UserRepository } from "../repositories/UserRepository";

export interface ReactForumsAdapter {
  setting: SettingsRepository;
  user: UserRepository;
  forum: ForumRepository;
  thread: ThreadRepository;
  post: PostRepository;
}

export interface ReactForumsAdapterInput {
  setting: SettingsRepository;
  user: UserRepository;
  forum: ForumRepository;
  thread: ThreadRepository;
  post: PostRepository;
}
