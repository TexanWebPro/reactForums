import { ForumRepository } from "../repositories/ForumRepository";

export interface ReactForumsAdapter {
  forum: ForumRepository;
}

export interface ReactForumsAdapterInput {
  forum: ForumRepository;
}
