import { Link } from "@tanstack/react-router";
import { UserCPNav } from "../components/layout/UserCPNav";
import Breadcrumbs from "@/components/Breadcrumbs";

export function MessagesView() {
  return (
    <>
      <Breadcrumbs crumbs={[{ label: "Private Messages" }]} />

      <div className="flex flex-row items-start justify-between gap-4 w-full">
        <UserCPNav />
        <span className="w-5/6 flex flex-col gap-8">
          <div className="w-full bg-stone-200 flex flex-col rounded-lg text-sm">
            <span className="bg-sky-600 w-full p-4 py-2 font-bold text-stone-50 border-2 border-sky-800 rounded-t-lg flex flex-row items-center justify-start gap-2">
              Inbox
            </span>
            <div className="flex flex-col items-center justify-between text-sm border-b-2 border-stone-500 bg-stone-200 rounded-b-lg w-full">
              <div className="bg-stone-950 text-stone-50 font-bold px-4 py-2 w-full grid grid-cols-3">
                <span className="">Subject</span>
                <span className="text-center">Sender</span>
                <span className="text-right">Date / Time Sent</span>
              </div>
              <div className="px-4 py-2 grid grid-cols-3 w-full items-center border-2 border-y-0 border-stone-500 rounded-b-lg">
                <span className="hover:underline cursor-pointer">
                  Re: Single Message
                </span>
                <span className="text-center">
                  <Link
                    to="/users/$username"
                    params={{ username: "Elegant-Totality" }}
                    className="text-sky-700 hover:underline"
                  >
                    Elegant Totality
                  </Link>
                </span>

                <span className="text-right">Yesterday, 2:05 AM</span>
              </div>
            </div>
          </div>
        </span>
      </div>
    </>
  );
}
