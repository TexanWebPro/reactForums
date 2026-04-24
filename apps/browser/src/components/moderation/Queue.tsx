import { Link } from "@tanstack/react-router";
import Breadcrumbs from "../Breadcrumbs";
import { ModCPNav } from "./ModCPNav";
import { formatDateTimeForPostDateTable } from "@reactforums/common/utils/dates";
import { ForumTreeNode } from "@reactforums/core";
import { useQuery } from "@tanstack/react-query";
import { forumQueries } from "@/features/forums/forums.query";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { ThreadComponent } from "../Thread";
import { threadQueries } from "@/features/threads/threads.query";
import { ThreadPreview } from "./ThreadPreview";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

export function ModQueue() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { label: "Moderation Control Panel", href: "/mod-dashboard" },
          { label: "Mod Queue" },
        ]}
      />
      <div className="flex flex-row items-start justify-between gap-4 w-full">
        <ModCPNav />
        <span className="w-5/6 flex flex-col gap-8">
          <Queue />
        </span>
      </div>
    </>
  );
}

function Queue() {
  const [forum, setForum] = useState("all");
  const count = 10;
  const postCount = 5;
  const threadCount = 2;
  const attachmentCount = 3;

  const { data: allForums } = useQuery({
    ...forumQueries.byCategory(),
  });

  function renderForumOptions(
    forums: ForumTreeNode[],
    depth = 0,
  ): React.ReactNode[] {
    return forums.flatMap((forum) => {
      const item = (
        <SelectItem key={forum.id} value={forum.id.toString()}>
          {`${"— ".repeat(depth)}${forum.name}`}
        </SelectItem>
      );

      const children = forum.children
        ? renderForumOptions(forum.children, depth + 1)
        : [];

      return [item, ...children];
    });
  }

  if (!allForums) return;

  return (
    <div className="w-full bg-stone-200 flex flex-col rounded-lg text-sm">
      <span className="bg-sky-600 w-full p-4 py-2 font-bold text-stone-50 border-2 border-sky-800 rounded-t-lg flex flex-row items-center justify-between gap-2">
        Mod Queue
      </span>
      <div className="flex flex-row items-start justify-between text-sm border-2 border-t-0 border-stone-500 bg-stone-200 rounded-b-lg w-full h-fit">
        <div className="w-full h-[800px] border-r-2 border-stone-500 overflow-auto">
          <div className="w-full p-4 flex flex-row gap-2 items-center justify-around sticky top-0 bg-stone-200 z-50">
            <span className="cursor-pointer flex flex-row font-bold border-b-2 border-sky-800 pb-1">
              <span className="p-2">All</span>
              <span className="bg-blue-50 rounded-lg p-2">{count}</span>
            </span>
            <span className="cursor-pointer flex flex-row border-b-2 border-stone-200 pb-1">
              <span className="p-2">Posts</span>
              <span className="bg-blue-50 rounded-lg p-2">{postCount}</span>
            </span>
            <span className="cursor-pointer flex flex-row border-b-2 border-stone-200 pb-1">
              <span className="p-2">Threads</span>
              <span className="bg-blue-50 rounded-lg p-2">{threadCount}</span>
            </span>
            <span className="cursor-pointer flex flex-row border-b-2 border-stone-200 pb-1">
              <span className="p-2">Attachments</span>
              <span className="bg-blue-50 rounded-lg p-2">
                {attachmentCount}
              </span>
            </span>
          </div>
          <div className="flex flex-row gap-4 border-y-2 border-stone-500 p-4 sticky top-16 bg-stone-200 z-50">
            <Select
              name={"field.name"}
              value={forum}
              onValueChange={(value) => setForum(value)}
            >
              <SelectTrigger
                id="form-tanstack-select-forum"
                className="w-full placeholder:text-slate-700  bg-stone-100 border-sky-800"
              >
                <SelectValue placeholder="Select a forum" />
              </SelectTrigger>
              <SelectContent
                className="bg-stone-100 min-w-56 border-sky-800"
                position={"item-aligned"}
              >
                <SelectItem value="all">All Forums</SelectItem>
                {renderForumOptions(allForums)}
              </SelectContent>
            </Select>
            <Select
              name={"field.name"}
              value={forum}
              onValueChange={(value) => setForum(value)}
            >
              <SelectTrigger
                id="form-tanstack-select-forum"
                className="w-full placeholder:text-slate-700  bg-stone-100 border-sky-800"
              >
                <SelectValue placeholder="Select a user group" />
              </SelectTrigger>
              <SelectContent
                className="bg-stone-100 min-w-56 border-sky-800"
                position={"item-aligned"}
              >
                <SelectItem value="all">All User Groups</SelectItem>
                {renderForumOptions(allForums)}
              </SelectContent>
            </Select>
          </div>
          <div className="overflow-y-auto">
            <QueueItem />
          </div>
          <div className="text-center p-4">End of Queue</div>
        </div>
        <div className="w-full border-l-2 border-stone-500 min-h-[800px] max-h-[800px] overflow-y-auto">
          <QueueItemPreview />
        </div>
      </div>
    </div>
  );
}

function QueueItem() {
  return (
    <>
      <div className="flex flex-row items-start justify-between border-l-4 border-b-2 border-l-stone-200 border-b-stone-400 cursor-pointer">
        <Checkbox className="m-5" />
        <span className="flex flex-col w-full items-start justify-between gap-4 py-4 pr-4">
          <span className="flex flex-row items-center justify-between w-full">
            <span className="font-bold">Jeb Bush</span>
            <span>4m ago</span>
          </span>
          <div className="w-full flex flex-col gap-4">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit unde
              labore facere est ut impedit, sapiente suscipit minus veniam,
              tenetur...
            </div>
            <div className="flex flex-row items-center justify-between w-full">
              <span>
                <span className="font-bold">Forum: </span>My Forum
              </span>
              <span className="px-2 border-2 border-blue-300 bg-blue-300 rounded-3xl">
                New User
              </span>
            </div>
          </div>
        </span>
      </div>
      <div className="flex flex-row items-start justify-between border-l-4 border-b-2 border-sky-800 cursor-pointer bg-stone-100">
        <Checkbox className="m-5" />
        <span className="flex flex-col w-full items-start justify-between gap-4 py-4 pr-4">
          <span className="flex flex-row items-center justify-between w-full">
            <span className="font-bold">Jeb Bush</span>
            <span>4m ago</span>
          </span>
          <div className="w-full flex flex-col gap-4">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit unde
              labore facere est ut impedit, sapiente suscipit minus veniam,
              tenetur...
            </div>
            <div className="flex flex-row items-center justify-between w-full">
              <span>
                <span className="font-bold">Forum: </span>My Forum
              </span>
              <span className="px-2 border-2 border-blue-300 bg-blue-300 rounded-3xl">
                Contains Links
              </span>
            </div>
          </div>
        </span>
      </div>
      <div className="flex flex-row items-start justify-between border-l-4 border-b-2 border-l-stone-200 border-b-stone-400 cursor-pointer">
        <Checkbox className="m-5" />
        <span className="flex flex-col w-full items-start justify-between gap-4 py-4 pr-4">
          <span className="flex flex-row items-center justify-between w-full">
            <span className="font-bold">Jeb Bush</span>
            <span>4m ago</span>
          </span>
          <div className="w-full flex flex-col gap-4">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit unde
              labore facere est ut impedit, sapiente suscipit minus veniam,
              tenetur...
            </div>
            <div className="flex flex-row items-center justify-between w-full">
              <span>
                <span className="font-bold">Forum: </span>My Forum
              </span>
              <span className="px-2 border-2 border-red-300 bg-red-300 rounded-3xl">
                Flagged Keywords
              </span>
            </div>
          </div>
        </span>
      </div>
      <div className="flex flex-row items-start justify-between border-l-4 border-b-2 border-l-stone-200 border-b-stone-400 cursor-pointer">
        <Checkbox className="m-5" />
        <span className="flex flex-col w-full items-start justify-between gap-4 py-4 pr-4">
          <span className="flex flex-row items-center justify-between w-full">
            <span className="font-bold">Jeb Bush</span>
            <span>4m ago</span>
          </span>
          <div className="w-full flex flex-col gap-4">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit unde
              labore facere est ut impedit, sapiente suscipit minus veniam,
              tenetur...
            </div>
            <div className="flex flex-row items-center justify-between w-full">
              <span>
                <span className="font-bold">Forum: </span>My Forum
              </span>
              <span className="px-2 border-2 border-yellow-300 bg-yellow-300 rounded-3xl">
                Prior Warnings
              </span>
            </div>
          </div>
        </span>
      </div>
      <div className="flex flex-row items-start justify-between border-l-4 border-b-2 border-l-stone-200 border-b-stone-400 cursor-pointer">
        <Checkbox className="m-5" />
        <span className="flex flex-col w-full items-start justify-between gap-4 py-4 pr-4">
          <span className="flex flex-row items-center justify-between w-full">
            <span className="font-bold">Jeb Bush</span>
            <span>4m ago</span>
          </span>
          <div className="w-full flex flex-col gap-4">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit unde
              labore facere est ut impedit, sapiente suscipit minus veniam,
              tenetur...
            </div>
            <div className="flex flex-row items-center justify-between w-full">
              <span>
                <span className="font-bold">Forum: </span>My Forum
              </span>
              <span className="px-2 border-2 border-yellow-300 bg-yellow-300 rounded-3xl">
                Prior Warnings
              </span>
            </div>
          </div>
        </span>
      </div>
      <div className="flex flex-row items-start justify-between border-l-4 border-b-2 border-l-stone-200 border-b-stone-400 cursor-pointer">
        <Checkbox className="m-5" />
        <span className="flex flex-col w-full items-start justify-between gap-4 py-4 pr-4">
          <span className="flex flex-row items-center justify-between w-full">
            <span className="font-bold">Jeb Bush</span>
            <span>4m ago</span>
          </span>
          <div className="w-full flex flex-col gap-4">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit unde
              labore facere est ut impedit, sapiente suscipit minus veniam,
              tenetur...
            </div>
            <div className="flex flex-row items-center justify-between w-full">
              <span>
                <span className="font-bold">Forum: </span>My Forum
              </span>
              <span className="px-2 border-2 border-yellow-300 bg-yellow-300 rounded-3xl">
                Prior Warnings
              </span>
            </div>
          </div>
        </span>
      </div>
    </>
  );
}

function QueueItemPreview() {
  const forumId = 2;
  const threadsPerPage = 1;
  const { data: thread } = useQuery({
    ...threadQueries.byForumId(forumId, threadsPerPage),
  });

  if (!thread) return;

  return (
    <div className="p-4">
      <ThreadPreview thread={thread[0]} />
      <div className="flex flex-row items-center justify-aruond gap-2">
        <Button variant="outline" className="border-blue-300 bg-blue-300">
          <img
            src="/images/icons/check-circle.svg"
            alt="Approve"
            className="h-5"
          />
          Approve
        </Button>
        <Button variant="outline" className="border-red-300 bg-red-300">
          <img src="/images/icons/x-mark.svg" alt="Approve" className="h-5" />
          Reject
        </Button>
        <Button variant="outline" className="border-stone-300 bg-stone-300">
          <img src="/images/icons/trash.svg" alt="Approve" className="h-5" />
          Delete
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              More
              <img
                src="/images/icons/chevron-down.svg"
                alt="Approve"
                className="h-4"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem className="cursor-pointer hover:bg-stone-100">
                Approve & publish
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-stone-100">
                Approve + warn user
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-stone-100">
                Reject with reason
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-stone-100">
                Reject & Ban User
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
