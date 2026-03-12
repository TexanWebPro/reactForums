import { Link } from "@tanstack/react-router";

export function AdminSidebarNav() {
  return (
    <div className="w-1/6 bg-stone-200 flex flex-col text-sm">
      <span className="bg-sky-600 w-full p-4 py-2 font-bold text-stone-50 border-2 border-sky-800 flex flex-row items-center justify-start gap-2">
        Control Panel Menu
      </span>
      <span className="flex flex-col items-start justify-between gap-2 w-full border-2 border-t-0 border-stone-400 rounded-b-lg">
        <Link
          to="/user-dashboard"
          className="flex flex-row items-start justify-end gap-2 hover:underline px-4 pb-2 pt-4"
        >
          <img
            src="/images/icons/home.svg"
            alt="User CP Home"
            className="w-4"
          />
          Administrator Control Panel
        </Link>
        <span className="flex flex-col items-start justify-between gap-2 w-full border-t-2 border-stone-400">
          <span className="bg-stone-300 w-full px-4 py-2 font-bold border-b-2 border-stone-400">
            Community
          </span>
          <span className="flex flex-col items-start justify-between gap-2 px-4 py-2">
            <Link
              to="/"
              className="flex flex-row items-start justify-end gap-2 hover:underline"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              Forums
            </Link>
            <Link
              to="/"
              className="flex flex-row items-start justify-end gap-2 hover:underline"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              Threads
            </Link>
            <Link
              to="/"
              className="flex flex-row items-start justify-end gap-2 hover:underline"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              Posts
            </Link>
            <Link
              to="/"
              className="flex flex-row items-start justify-end gap-2 hover:underline"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              Attachments
            </Link>
          </span>
        </span>
        <span className="flex flex-col items-start justify-between gap-2 w-full border-t-2 border-stone-400">
          <span className="bg-stone-300 w-full px-4 py-2 font-bold border-b-2 border-stone-400">
            Members
          </span>
          <span className="flex flex-col items-start justify-between gap-2 px-4 py-2">
            <Link
              to="/"
              className="flex flex-row items-start justify-end gap-2 hover:underline"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              Users
            </Link>
            <Link
              to="/"
              className="flex flex-row items-start justify-end gap-2 hover:underline"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              User Groups
            </Link>
            <Link
              to="/"
              className="flex flex-row items-start justify-end gap-2 hover:underline"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              Custom Profile Fields
            </Link>
            <Link
              to="/"
              className="flex flex-row items-start justify-end gap-2 hover:underline"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              Bans
            </Link>
            <Link
              to="/"
              className="flex flex-row items-start justify-end gap-2 hover:underline"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              Warnings
            </Link>
          </span>
        </span>
        <span className="flex flex-col items-start justify-between gap-2 w-full border-t-2 border-stone-400">
          <span className="bg-stone-300 w-full px-4 py-2 font-bold border-b-2 border-stone-400">
            Moderation
          </span>
          <span className="flex flex-col items-start justify-between gap-2 px-4 py-2">
            <Link
              to="/"
              className="flex flex-row items-start justify-end gap-2 hover:underline"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              Reported Content
            </Link>
            <Link
              to="/"
              className="flex flex-row items-start justify-end gap-2 hover:underline"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              Approval Queue
            </Link>
            <Link
              to="/"
              className="flex flex-row items-start justify-end gap-2 hover:underline"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              Drafts
            </Link>
            <Link
              to="/"
              className="flex flex-row items-start justify-end gap-2 hover:underline"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              Deleted Content
            </Link>
            <Link
              to="/"
              className="flex flex-row items-start justify-end gap-2 hover:underline"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              Moderator Logs
            </Link>
          </span>
        </span>
        <span className="flex flex-col items-start justify-between gap-2 w-full border-t-2 border-stone-400">
          <span className="bg-stone-300 w-full px-4 py-2 font-bold border-b-2 border-stone-400">
            Messaging
          </span>
          <span className="flex flex-col items-start justify-between gap-2 px-4 py-2">
            <Link
              to="/"
              className="flex flex-row items-start justify-end gap-2 hover:underline"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              Private Mail
            </Link>
            <Link
              to="/"
              className="flex flex-row items-start justify-end gap-2 hover:underline"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              Chat Conversations
            </Link>
            <Link
              to="/"
              className="flex flex-row items-start justify-end gap-2 hover:underline"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              Mailboxes
            </Link>
          </span>
        </span>
        <span className="flex flex-col items-start justify-between gap-2 w-full border-t-2 border-stone-400">
          <span className="bg-stone-300 w-full px-4 py-2 font-bold border-b-2 border-stone-400">
            Customization
          </span>
          <span className="flex flex-col items-start justify-between gap-2 px-4 py-2">
            <Link
              to="/"
              className="flex flex-row items-start justify-end gap-2 hover:underline"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              Themes
            </Link>
            <Link
              to="/"
              className="flex flex-row items-start justify-end gap-2 hover:underline"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              Templates
            </Link>
            <Link
              to="/"
              className="flex flex-row items-start justify-end gap-2 hover:underline"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              Languages
            </Link>
            <Link
              to="/"
              className="flex flex-row items-start justify-end gap-2 hover:underline"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              Navigation
            </Link>
            <Link
              to="/"
              className="flex flex-row items-start justify-end gap-2 hover:underline"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              Homepage
            </Link>
          </span>
        </span>
        <span className="flex flex-col items-start justify-between gap-2 w-full border-t-2 border-stone-400">
          <span className="bg-stone-300 w-full px-4 py-2 font-bold border-b-2 border-stone-400">
            Configuration
          </span>
          <span className="flex flex-col items-start justify-between gap-2 px-4 py-2">
            <Link
              to="/"
              className="flex flex-row items-start justify-end gap-2 hover:underline"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              Settings
            </Link>
            <Link
              to="/"
              className="flex flex-row items-start justify-end gap-2 hover:underline"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              Board Settings
            </Link>
            <Link
              to="/"
              className="flex flex-row items-start justify-end gap-2 hover:underline"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              Email
            </Link>
            <Link
              to="/"
              className="flex flex-row items-start justify-end gap-2 hover:underline"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              Authentication
            </Link>
            <Link
              to="/"
              className="flex flex-row items-start justify-end gap-2 hover:underline"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              Storage
            </Link>
            <Link
              to="/"
              className="flex flex-row items-start justify-end gap-2 hover:underline"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              Caching
            </Link>
          </span>
        </span>
        <span className="flex flex-col items-start justify-between gap-2 w-full border-t-2 border-stone-400">
          <span className="bg-stone-300 w-full px-4 py-2 font-bold border-b-2 border-stone-400">
            Extensions
          </span>
          <span className="flex flex-col items-start justify-between gap-2 px-4 py-2">
            <Link
              to="/"
              className="flex flex-row items-start justify-end gap-2 hover:underline"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              Plugins
            </Link>
          </span>
        </span>
        <span className="flex flex-col items-start justify-between gap-2 w-full border-t-2 border-stone-400">
          <span className="bg-stone-300 w-full px-4 py-2 font-bold border-b-2 border-stone-400">
            System
          </span>
          <span className="flex flex-col items-start justify-between gap-2 px-4 py-2">
            <Link
              to="/"
              className="flex flex-row items-start justify-end gap-2 hover:underline"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              Board Statistics
            </Link>
            <Link
              to="/"
              className="flex flex-row items-start justify-end gap-2 hover:underline"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              Background Jobs
            </Link>
            <Link
              to="/"
              className="flex flex-row items-start justify-end gap-2 hover:underline"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              System Logs
            </Link>
            <Link
              to="/"
              className="flex flex-row items-start justify-end gap-2 hover:underline"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              Database Health
            </Link>
          </span>
        </span>
        <span className="flex flex-col items-start justify-between gap-2 w-full border-t-2 border-stone-400">
          <span className="bg-stone-300 w-full px-4 py-2 font-bold border-b-2 border-stone-400">
            Administration
          </span>
          <span className="flex flex-col items-start justify-between gap-2 px-4 py-2">
            <Link
              to="/"
              className="flex flex-row items-start justify-end gap-2 hover:underline"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              Admin Users
            </Link>
            <Link
              to="/"
              className="flex flex-row items-start justify-end gap-2 hover:underline"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              Admin Roles
            </Link>
            <Link
              to="/"
              className="flex flex-row items-start justify-end gap-2 hover:underline"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              Permissions
            </Link>
            <Link
              to="/"
              className="flex flex-row items-start justify-end gap-2 hover:underline"
            >
              <img
                src="/images/icons/paper-clip.svg"
                alt="Manage Attachments"
                className="w-4"
              />
              Audit Log
            </Link>
          </span>
        </span>
      </span>
    </div>
  );
}
