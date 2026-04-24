import { Link } from "@tanstack/react-router";
import Breadcrumbs from "../Breadcrumbs";
import { ModCPNav } from "./ModCPNav";
import { formatDateTimeForPostDateTable } from "@reactforums/common/utils/dates";
import { ForumTreeNode } from "@reactforums/core";
import { useQuery } from "@tanstack/react-query";
import { forumQueries } from "@/features/forums/forums.query";

export function ModAnnouncements() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { label: "Moderation Control Panel", href: "/mod-dashboard" },
          { label: "Announcements" },
        ]}
      />
      <div className="flex flex-row items-start justify-between gap-4 w-full">
        <ModCPNav />
        <span className="w-5/6 flex flex-col gap-8">
          <GlobalAnnouncements />
          <ForumAnnouncements />
        </span>
      </div>
    </>
  );
}

function GlobalAnnouncements() {
  return (
    <div className="w-full bg-stone-200 flex flex-col rounded-lg text-sm">
      <span className="bg-sky-600 w-full p-4 py-2 font-bold text-stone-50 border-2 border-sky-800 rounded-t-lg flex flex-row items-center justify-between gap-2">
        Global Announcements
        <img
          alt="Add Global Announcement"
          src="/images/icons/plus-circle-white.svg"
          className="h-6 hover:cursor-pointer"
        />
      </span>
      <div className="flex flex-col items-center justify-between text-sm border-2 border-t-0 border-stone-500 bg-stone-200 rounded-b-lg w-full">
        <div className="bg-stone-950 text-stone-50 font-bold px-4 py-2 w-full grid grid-cols-4">
          <span>Announcement</span>
          <span>Date</span>
          <span>Posted By</span>
          <span>Actions</span>
        </div>
        <div className="px-4 py-2 grid grid-cols-4 w-full border-b-2 border-stone-300 items-center">
          <Link to="/">Single Announcement</Link>
          <span>{formatDateTimeForPostDateTable(new Date())}</span>
          <Link to="/users/$username" params={{ username: "Jeb Bush" }}>
            Jeb Bush
          </Link>
          <span className="flex flex-row items-center">
            <img
              alt="Edit Global Announcement"
              src="/images/icons/pencil.svg"
              className="h-6 hover:cursor-pointer"
            />
            <img
              alt="Delete Global Announcement"
              src="/images/icons/x-mark-red.svg"
              className="h-6 hover:cursor-pointer"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

function ForumAnnouncements() {
  const { data: allForums } = useQuery({
    ...forumQueries.byCategory(),
  });

  function renderForum(forums: ForumTreeNode[], depth = 0): React.ReactNode[] {
    return forums.flatMap((forum) => {
      const item = (
        <>
          <span
            key={forum.id}
            className="bg-stone-300 w-full px-4 py-2 border-y-2 border-stone-400 grid grid-cols-4"
          >
            <span className="col-span-3">{`${"— ".repeat(depth)}${forum.name}`}</span>
            <img
              alt="Add Forum Announcement"
              src="/images/icons/plus-circle.svg"
              className="h-6 hover:cursor-pointer"
            />
          </span>
          <div className="px-4 py-2 grid grid-cols-4 w-full border-b-2 border-stone-300 items-center">
            <Link to="/">Single Announcement</Link>
            <span>{formatDateTimeForPostDateTable(new Date())}</span>
            <Link to="/users/$username" params={{ username: "Jeb Bush" }}>
              Jeb Bush
            </Link>
            <span className="flex flex-row items-center">
              <img
                alt="Edit Global Announcement"
                src="/images/icons/pencil.svg"
                className="h-6 hover:cursor-pointer"
              />
              <img
                alt="Delete Global Announcement"
                src="/images/icons/x-mark-red.svg"
                className="h-6 hover:cursor-pointer"
              />
            </span>
          </div>
          <div className="px-4 py-2 grid grid-cols-4 w-full border-b-2 border-stone-300 items-center">
            <Link to="/">Single Announcement</Link>
            <span>{formatDateTimeForPostDateTable(new Date())}</span>
            <Link to="/users/$username" params={{ username: "Jeb Bush" }}>
              Jeb Bush
            </Link>
            <span className="flex flex-row items-center">
              <img
                alt="Edit Global Announcement"
                src="/images/icons/pencil.svg"
                className="h-6 hover:cursor-pointer"
              />
              <img
                alt="Delete Global Announcement"
                src="/images/icons/x-mark-red.svg"
                className="h-6 hover:cursor-pointer"
              />
            </span>
          </div>
        </>
      );

      const children = forum.children
        ? renderForum(forum.children, depth + 1)
        : [];

      return [item, ...children];
    });
  }

  if (!allForums) return;

  return (
    <div className="w-full bg-stone-200 flex flex-col rounded-lg text-sm">
      <span className="bg-sky-600 w-full p-4 py-2 font-bold text-stone-50 border-2 border-sky-800 rounded-t-lg flex flex-row items-center justify-between gap-2">
        Forum Announcements
      </span>
      <div className="flex flex-col items-start justify-between text-sm border-2 border-t-0 border-stone-500 bg-stone-200 rounded-b-lg w-full">
        <div className="bg-stone-950 text-stone-50 font-bold px-4 py-2 w-full grid grid-cols-4">
          <span>Announcement</span>
          <span>Date</span>
          <span>Posted By</span>
          <span>Actions</span>
        </div>
        {renderForum(allForums)}
      </div>
    </div>
  );
}
