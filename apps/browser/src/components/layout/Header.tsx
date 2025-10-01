import { Link } from "@tanstack/react-router";
import Edges from "./Edges";
import { settingsService } from "@/api/client";
import { SettingKey } from "@reactforums/core";

export default function Header() {
  const boardName = settingsService.getByName(SettingKey.BoardName);
  const boardDescription = settingsService.getByName(
    SettingKey.BoardDescription
  );

  return (
    <header className="flex flex-col bg-sky-700 text-neutral-50 justify-between">
      <nav className="text-2xl">
        <Edges className="flex flex-row gap-4 py-8 items-center justify-between">
          <span>
            <Link className="hover:underline" to="/">
              {String(boardName?.value)}
            </Link>
            <p className="text-lg">{String(boardDescription?.value)}</p>
          </span>
        </Edges>
      </nav>

      <div className="bg-stone-950 text-stone-50 font-bold p-2">
        <Edges className="w-full flex flex-row items-center justify-between text-sm">
          <div className="flex flex-row items-center justify-between gap-4">
            <span>
              Welcome back, <Link to="/">Elegant Totality</Link>
            </span>
            <ul className="flex flex-row items-center justify-between gap-2">
              <li>
                <a className="flex flex-row items-center justify-between gap-1">
                  Logout
                  <img
                    src="/images/icons/arrow-right-white.svg"
                    alt="Logout"
                    className="w-5"
                  />
                </a>
              </li>
            </ul>
          </div>
          <ul className="flex flex-row items-center justify-between gap-4">
            <li>
              <Link
                to="/"
                className="flex flex-row items-center justify-between gap-1"
              >
                <img
                  src="/images/icons/magnifying-glass-white.svg"
                  alt="Search"
                  className="w-4"
                />
                Search
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex flex-row items-center justify-between gap-1"
              >
                <img
                  src="/images/icons/users-white.svg"
                  alt="Memberlist"
                  className="w-4"
                />
                Memberlist
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex flex-row items-center justify-between gap-1"
              >
                <img
                  src="/images/icons/question-mark-circle-white.svg"
                  alt="Help"
                  className="w-4"
                />
                Help
              </Link>
            </li>
          </ul>
        </Edges>
      </div>
      <div className="bg-stone-200 text-stone-950 font-bold px-2">
        <Edges className="w-full flex flex-row items-center justify-between text-sm">
          <div className="flex flex-row items-center justify-between gap-4">
            <Link
              to="/"
              className="flex flex-row items-center justify-between gap-1"
            >
              <img
                src="/images/icons/user.svg"
                alt="User Control Panel"
                className="w-4"
              />
              User CP
            </Link>
            <Link
              to="/"
              className="flex flex-row items-center justify-between gap-1"
            >
              <img
                src="/images/icons/document-text.svg"
                alt="Moderator Control Panel"
                className="w-4"
              />
              Mod CP
            </Link>
            <Link
              to="/"
              className="flex flex-row items-center justify-between gap-1"
            >
              <img
                src="/images/icons/cog.svg"
                alt="Administrator Control Panel"
                className="w-4"
              />
              Admin CP
            </Link>
          </div>
          <ul className="flex flex-row items-center justify-between gap-4">
            <li>
              <Link to="/">View New Replies</Link>
            </li>
            <li>
              <Link to="/">View New Topics</Link>
            </li>
            <li>
              <Link to="/">Messages</Link>
            </li>
          </ul>
        </Edges>
      </div>
    </header>
  );
}
