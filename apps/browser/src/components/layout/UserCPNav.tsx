import { Link } from "@tanstack/react-router";

export function UserCPNav() {
  return (
    <div className="w-1/6 bg-stone-200 flex flex-col rounded-lg text-sm">
      <span className="bg-sky-600 w-full p-4 py-2 font-bold text-stone-50 border-2 border-sky-800 rounded-t-lg flex flex-row items-center justify-start gap-2">
        Control Panel Menu
      </span>
      <span className="flex flex-col items-start justify-between gap-2 w-full border-2 border-t-0 border-stone-400 rounded-b-lg">
        <Link
          to="/user-dashboard"
          className="flex flex-row items-center justify-end gap-2 px-4 pb-2 pt-4"
        >
          <img
            src="/images/icons/home.svg"
            alt="User CP Home"
            className="w-4"
          />
          User CP Home
        </Link>
        <span className="flex flex-col items-start justify-between gap-2 w-full border-t-2 border-stone-400">
          <span className="bg-stone-300 w-full px-4 py-2 font-bold border-b-2 border-stone-400">
            Messages
          </span>
          <span className="flex flex-col items-start justify-between gap-2 px-4 py-2">
            <Link
              to="/"
              className="flex flex-row items-center justify-end gap-2"
            >
              <img
                src="/images/icons/envelope.svg"
                alt="Compose Message"
                className="w-4"
              />
              Compose
            </Link>
            <Link
              to="/messages"
              className="flex flex-row items-center justify-end gap-2"
            >
              <img
                src="/images/icons/inbox.svg"
                alt="Message Inbox"
                className="w-4"
              />
              Inbox
            </Link>
          </span>
        </span>

        <span className="flex flex-col items-start justify-between gap-2 w-full border-t-2 border-stone-400">
          <span className="bg-stone-300 w-full px-4 py-2 font-bold border-b-2 border-stone-400">
            Profile
          </span>
          <span className="flex flex-col items-start justify-between gap-2 px-4 py-2">
            <Link
              to="/"
              className="flex flex-row items-center justify-end gap-2"
            >
              <img
                src="/images/icons/pencil.svg"
                alt="Edit Profile"
                className="w-4"
              />
              Edit Profile
            </Link>
            <Link
              to="/"
              className="flex flex-row items-center justify-end gap-2"
            >
              <img
                src="/images/icons/cog-6-tooth.svg"
                alt="Edit Options"
                className="w-4"
              />
              Edit Options
            </Link>
          </span>
        </span>

        <span className="flex flex-col items-start justify-between gap-2 w-full border-t-2 border-stone-400">
          <span className="bg-stone-300 w-full px-4 py-2 font-bold border-b-2 border-stone-400">
            Social
          </span>
          <span className="flex flex-col items-start justify-between gap-2 px-4 py-2">
            <Link
              to="/"
              className="flex flex-row items-center justify-end gap-2"
            >
              <img
                src="/images/icons/user-group.svg"
                alt="Group Memberships"
                className="w-4"
              />
              Group Memberships
            </Link>
            <Link
              to="/"
              className="flex flex-row items-center justify-end gap-2"
            >
              <img
                src="/images/icons/user-plus.svg"
                alt="Friends List"
                className="w-4"
              />
              Friends List
            </Link>
            <Link
              to="/"
              className="flex flex-row items-center justify-end gap-2"
            >
              <img
                src="/images/icons/user-minus.svg"
                alt="Blocked List"
                className="w-4"
              />
              Blocked List
            </Link>
          </span>
        </span>

        <span className="flex flex-col items-start justify-between gap-2 w-full border-t-2 border-stone-400">
          <span className="bg-stone-300 w-full px-4 py-2 font-bold border-b-2 border-stone-400">
            Miscellaneous
          </span>
          <span className="flex flex-col items-start justify-between gap-2 px-4 py-2">
            <Link
              to="/"
              className="flex flex-row items-center justify-end gap-2"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              Manage Attachments
            </Link>
            <Link
              to="/"
              className="flex flex-row items-center justify-end gap-2"
            >
              <img
                src="/images/icons/document-text.svg"
                alt="Saved Drafts"
                className="w-4"
              />
              Saved Drafts
            </Link>
            <Link
              to="/"
              className="flex flex-row items-center justify-end gap-2"
            >
              <img
                src="/images/icons/bell.svg"
                alt="Subscriptions"
                className="w-4"
              />
              Subscriptions
            </Link>
          </span>
        </span>
      </span>
    </div>
  );
}
