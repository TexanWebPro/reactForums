import { Link } from "@tanstack/react-router";

export function ModCPNav() {
  return (
    <>
      <div className="w-1/6 bg-stone-200 flex flex-col rounded-lg text-sm">
        <span className="bg-sky-600 w-full p-4 py-2 font-bold text-stone-50 border-2 border-sky-800 rounded-t-lg flex flex-row items-center justify-start gap-2">
          Control Panel Menu
        </span>
        <span className="flex flex-col items-start justify-between gap-2 w-full border-2 border-t-0 border-stone-400 rounded-b-lg">
          <Link
            to="/mod-dashboard"
            className="flex flex-row items-start justify-end gap-2 px-4 pb-2 pt-4"
          >
            <img
              src="/images/icons/home.svg"
              alt="Moderation CP Home"
              className="w-4"
            />
            Mod CP Home
          </Link>
          <span className="flex flex-col items-start justify-between gap-2 w-full border-t-2 border-stone-400">
            <span className="bg-stone-300 w-full px-4 py-2 font-bold border-b-2 border-stone-400">
              Forums & Posts
            </span>
            <span className="flex flex-col items-start justify-between gap-2 px-4 py-2">
              <Link
                to="/"
                className="flex flex-row items-start justify-end gap-2"
              >
                <img
                  src="/images/icons/megaphone.svg"
                  alt="Announcements"
                  className="w-4"
                />
                Announcements
              </Link>
              <Link
                to="/"
                className="flex flex-row items-start justify-end gap-2"
              >
                <img
                  src="/images/icons/shield-exclamation.svg"
                  alt="Mod Queue"
                  className="w-4"
                />
                Mod Queue
              </Link>
              <Link
                to="/messages"
                className="flex flex-row items-start justify-end gap-2"
              >
                <img
                  src="/images/icons/flag.svg"
                  alt="Report Center"
                  className="w-4"
                />
                Report Center
              </Link>
              <Link
                to="/messages"
                className="flex flex-row items-start justify-end gap-2"
              >
                <img
                  src="/images/icons/document-text.svg"
                  alt="Moderation Logs"
                  className="w-4"
                />
                Moderation Logs
              </Link>
            </span>
          </span>

          <span className="flex flex-col items-start justify-between gap-2 w-full border-t-2 border-stone-400">
            <span className="bg-stone-300 w-full px-4 py-2 font-bold border-b-2 border-stone-400">
              Users
            </span>
            <span className="flex flex-col items-start justify-between gap-2 px-4 py-2">
              <Link
                to="/"
                className="flex flex-row items-start justify-end gap-2"
              >
                <img
                  src="/images/icons/pencil.svg"
                  alt="Profile Editor"
                  className="w-4"
                />
                Profile Editor
              </Link>
              <Link
                to="/"
                className="flex flex-row items-start justify-end gap-2"
              >
                <img
                  src="/images/icons/user.svg"
                  alt="Banning"
                  className="w-4"
                />
                Banning
              </Link>
              <Link
                to="/"
                className="flex flex-row items-start justify-end gap-2"
              >
                <img
                  src="/images/icons/exclamation-triangle.svg"
                  alt="Warning Logs"
                  className="w-4"
                />
                Warning Logs
              </Link>
              <Link
                to="/"
                className="flex flex-row items-start justify-end gap-2"
              >
                <img
                  src="/images/icons/magnifying-glass.svg"
                  alt="IP Search"
                  className="w-4"
                />
                IP Search
              </Link>
            </span>
          </span>
        </span>
      </div>
    </>
  );
}
