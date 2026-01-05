import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/users/$userId/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <span className="text-sm font-bold flex flex-row items-center justify-start gap-2 pb-4">
        <Link to="/">rF Community Forums</Link>
        <p>{`-> Profile of Elegant Totality`}</p>
      </span>

      <div>
        <div className="flex flex-row items-center justify-between text-sm p-4 border-2 border-stone-200">
          <span className="flex flex-col items-start">
            <span className="text-2xl text-green-800 font-bold">
              Elegant Totality
            </span>
            <span className="italic">Administrator</span>
            <span className="flex flex-row items-center justify-between gap-1 mb-4">
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
            </span>
            <span>
              <p>
                <span className="font-bold">Registration Date:</span> Today
              </p>
              <p>
                <span className="font-bold">Date of Birth:</span> 01-01-1975 (50
                years old)
              </p>
              <p>
                <span className="font-bold">Local Time:</span> 09-05-2025 at
                08:26 PM
              </p>
              <p>
                <span className="font-bold">Status:</span>{" "}
                <span className="text-green-800 font-bold">Online</span>{" "}
                (Viewing Profile of Elegant Totality @ 08:25 PM)
              </p>
            </span>
          </span>
          <span className="border-2 border-stone-900">
            <img
              src="/images/default_avatar.jpg"
              alt="Elegant Totality Avatar"
            />
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 mt-8 text-sm w-full justify-items-center">
          <div className="border-2 border-stone-200 rounded-lg w-full">
            <div className="bg-sky-700 p-4 text-neutral-50 font-bold rounded-t-lg">
              Elegant Totality's Forum Info
            </div>
            <div className="px-4 py-2">
              <div className="border-b-2 border-stone-200 p-2">
                <span className="font-bold">Joined Date:</span>{" "}
                {new Date().toString()}
              </div>
              <div className="border-b-2 border-stone-200 p-2">
                <span className="font-bold">Last Visit:</span> 1 Day Ago
              </div>
              <div className="border-b-2 border-stone-200 p-2">
                <span className="font-bold">Total Replies:</span> 0 (0 replies
                per day | 0 percent of total replies)
              </div>
              <div className="border-b-2 border-stone-200 p-2">
                <span className="font-bold">Total Topics:</span> 0 (0 topics per
                day | 0 percent of total topics)
              </div>
              <div className="border-b-2 border-stone-200 p-2">
                <span className="font-bold">Time Spent Online:</span> 2 Minutes,
                17 Seconds
              </div>
              <div className="border-b-2 border-stone-200 p-2">
                <span className="font-bold">Members Referred:</span> 12
              </div>
              <div className="border-b-2 border-stone-200 p-2">
                <span className="font-bold">Reputation:</span>{" "}
                <span className="font-bold text-green-700">+12</span>
              </div>
              <div className="p-2">
                {/* TODO: Viewable only to Mods and Admins */}
                <span className="font-bold">Warning Level:</span>{" "}
                <span className="font-bold text-red-700">0%</span>
              </div>
            </div>
          </div>
          <div className="border-2 border-stone-200 rounded-lg w-full max-h-fit">
            <div className="bg-sky-700 p-4 text-neutral-50 font-bold rounded-t-lg">
              Elegant Totality's Signature
            </div>
            <div className="px-4 py-4">Signature.</div>
          </div>

          <div className="border-2 border-stone-200 rounded-lg w-full max-h-fit">
            <div className="bg-sky-700 p-4 text-neutral-50 font-bold rounded-t-lg">
              Additional Info About Elegant Totality
            </div>
            <div className="px-4 py-2">
              <div className="border-b-2 border-stone-200 p-2">
                <span className="font-bold">Location:</span> Alabama
              </div>
              <div className="border-b-2 border-stone-200 p-2">
                <span className="font-bold">Bio:</span> 1 Day Ago
              </div>
              <div className="p-2">
                <span className="font-bold">Gender:</span> Male
              </div>
            </div>
          </div>
          <div className="border-2 border-stone-200 rounded-lg w-full max-h-fit">
            <div className="bg-sky-700 p-4 text-neutral-50 font-bold rounded-t-lg">
              Elegant Totality's Contact Info
            </div>
            <div className="px-4 py-2">
              <div className="p-2">
                <span className="font-bold">Website:</span> https://website.com
              </div>
            </div>
          </div>
          <div className="border-2 border-stone-200 rounded-lg w-full max-h-fit">
            <div className="bg-sky-700 p-4 text-neutral-50 font-bold rounded-t-lg">
              Moderator Options
            </div>
            <div className="px-4 py-2">
              <div className="p-2 flex flex-col border-b-2 border-stone-200">
                <span>
                  <span className="font-bold">Registration IP:</span>{" "}
                  0-00-00-0-0-00-0-0-0-0
                </span>
                <span>
                  <span className="font-bold">Last Known IP:</span>{" "}
                  0-00-00-0-0-00-0-0-0-0
                </span>
              </div>
              <div className="p-2 flex flex-col border-b-2 border-stone-200">
                <span>
                  <Link to="/mod-dashboard" className="font-bold">
                    Edit this user in Mod CP
                  </Link>
                </span>
                <span>
                  <Link to="/mod-dashboard" className="font-bold">
                    Ban this user in Mod CP
                  </Link>
                </span>
              </div>
              <div className="p-2 flex flex-col">
                <span>
                  <span className="">
                    There are currently no notes on this user
                  </span>
                </span>
                <span>
                  <Link to="/mod-dashboard" className="font-bold">
                    Edit user notes in Mod CP
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="border-2 border-stone-200 rounded-lg w-full max-h-fit">
            <div className="bg-sky-700 p-4 text-neutral-50 font-bold rounded-t-lg">
              Admin Options
            </div>
            <div className="p-2 flex flex-col border-b-2 border-stone-200">
              <span>
                <Link to="/admin" className="font-bold">
                  Edit this user in Admin CP
                </Link>
              </span>
              <span>
                <Link to="/admin" className="font-bold">
                  Ban this user in Admin CP
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
