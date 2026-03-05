import { Link } from "@tanstack/react-router";
import Edges from "./Edges";
import { SettingKey, Setting } from "@reactforums/core";
import { useQuery } from "@tanstack/react-query";

export default function Header() {
  async function fetchSettingByName(name: SettingKey): Promise<Setting> {
    const res = await fetch(
      `/api/settings/query/by-name?name=${encodeURIComponent(name)}`,
    );
    const body = await res.json().catch(() => null);

    if (!res.ok)
      throw new Error(body?.error ?? `Request failed (${res.status})`);
    return body as Setting;
  }

  const {
    data: boardName,
    isLoading,
    error,
  } = useQuery({
    queryKey: [`setting-${SettingKey.BoardName}`],
    queryFn: async () => {
      const res = await fetchSettingByName(SettingKey.BoardName);
      return res;
    },
  });

  const {
    data: boardDescription,
    isLoading: boardDescriptionLoading,
    error: boardDescriptionError,
  } = useQuery({
    queryKey: [`setting-${SettingKey.BoardDescription}`],
    queryFn: async () => {
      const res = await fetchSettingByName(SettingKey.BoardDescription);
      return res;
    },
  });

  if (isLoading || boardDescriptionLoading) return "Loading";
  if (error || boardDescriptionError) return "Error";

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
              Welcome back,{" "}
              <Link to="/users/$userId" params={{ userId: "Elegant Totality" }}>
                Elegant Totality
              </Link>
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
              to="/user-dashboard"
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
              <Link to="/messages">Messages</Link>
            </li>
          </ul>
        </Edges>
      </div>
    </header>
  );
}
