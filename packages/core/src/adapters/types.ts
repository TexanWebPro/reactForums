import { ForumRepository } from "../repositories/ForumRepository";
import { SettingsRepository } from "../repositories/SettingsRepository";
import { ThreadRepository } from "../repositories/ThreadRepository";
import { UserRepository } from "../repositories/UserRepository";

export interface ReactForumsAdapter {
  setting: SettingsRepository;
  user: UserRepository;
  forum: ForumRepository;
  thread: ThreadRepository;
}

export interface ReactForumsAdapterInput {
  setting: SettingsRepository;
  user: UserRepository;
  forum: ForumRepository;
  thread: ThreadRepository;
}
