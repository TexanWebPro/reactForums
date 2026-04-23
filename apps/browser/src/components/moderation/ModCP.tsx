import { Link } from "@tanstack/react-router";
import Breadcrumbs from "../Breadcrumbs";
import { ModCPNav } from "./ModCPNav";

export function ModCP() {
  return (
    <>
      <Breadcrumbs crumbs={[{ label: "Moderation Control Panel" }]} />
      <div className="flex flex-row items-start justify-between gap-4 w-full">
        <ModCPNav />
        <span className="w-5/6 flex flex-col gap-8">
          <ModerationSummary />
          <ModLogLatest />
          <BansEnding />
        </span>
      </div>
    </>
  );
}

function ModerationSummary() {
  return (
    <div className="w-full bg-stone-200 flex flex-col rounded-lg text-sm">
      <span className="bg-sky-600 w-full p-4 py-2 font-bold text-stone-50 border-2 border-sky-800 rounded-t-lg flex flex-row items-center justify-start gap-2">
        Awaiting Moderation
      </span>
      <div className="flex flex-row items-center justify-between text-sm p-6 border-2 border-t-0 border-stone-500 bg-stone-200 rounded-b-lg">
        <span className="grid grid-cols-4 mx-auto gap-6">
          <span className="flex flex-col items-start border-2 border-stone-500 p-4 rounded-lg gap-4">
            <span className="text-lg font-bold">Threads</span>
            <p className="font-bold text-4xl">124</p>
          </span>
          <span className="flex flex-col items-start border-2 border-stone-500 p-4 rounded-lg gap-4">
            <span className="text-lg font-bold">Posts</span>
            <p className="font-bold text-4xl">124</p>
          </span>
          <span className="flex flex-col items-start border-2 border-stone-500 p-4 rounded-lg gap-4">
            <span className="text-lg font-bold">Attachments</span>
            <p className="font-bold text-4xl">124</p>
          </span>
          <span className="flex flex-col items-start border-2 border-stone-500 p-4 rounded-lg gap-4">
            <span className="text-lg font-bold">Awaiting Activation</span>
            <p className="font-bold text-4xl">124</p>
          </span>
        </span>
      </div>
    </div>
  );
}

function ModLogLatest() {
  return (
    <div className="w-full bg-stone-200 flex flex-col rounded-lg text-sm">
      <span className="bg-sky-600 w-full p-4 py-2 font-bold text-stone-50 border-2 border-sky-800 rounded-t-lg flex flex-row items-center justify-start gap-2">
        Recent Moderation Actions
      </span>
      <div className="flex flex-col items-center justify-between text-sm border-2 border-t-0 border-stone-500 bg-stone-200 rounded-b-lg w-full">
        <div className="bg-stone-950 text-stone-50 font-bold px-4 py-2 w-full grid grid-cols-5">
          <span>Username</span>
          <span>Date</span>
          <span>Action</span>
          <span>Information</span>
          <span>IP Address</span>
        </div>
        <div className="px-4 py-2 grid grid-cols-5 w-full border-b-2 border-stone-300 items-center">
          <Link to="/users/$username" params={{ username: "Jeb Bush" }}>
            Jeb Bush
          </Link>
          <span>{new Date().toISOString()}</span>
          <span>Banned</span>
          <span>Spam</span>
          <span>00-0000-0000</span>
        </div>
      </div>
    </div>
  );
}

function BansEnding() {
  return (
    <div className="w-full bg-stone-200 flex flex-col rounded-lg text-sm">
      <span className="bg-sky-600 w-full p-4 py-2 font-bold text-stone-50 border-2 border-sky-800 rounded-t-lg flex flex-row items-center justify-start gap-2">
        Bans Ending Soon
      </span>
      <div className="flex flex-col items-center justify-between text-sm border-2 border-t-0 border-stone-500 bg-stone-200 rounded-b-lg w-full">
        <div className="bg-stone-950 text-stone-50 font-bold px-4 py-2 w-full grid grid-cols-6">
          <span>Username</span>
          <span className="col-span-3">Reason</span>
          <span>Length</span>
          <span>Banned By</span>
        </div>
        <div className="px-4 py-2 grid grid-cols-6 w-full border-b-2 border-stone-300 items-center">
          <Link to="/users/$username" params={{ username: "Jeb Bush" }}>
            Jeb Bush
          </Link>
          <span className="col-span-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </span>
          <span>7 Days</span>
          <Link to="/users/$username" params={{ username: "Elegant Totality" }}>
            Elegant Totality
          </Link>
        </div>
      </div>
    </div>
  );
}
