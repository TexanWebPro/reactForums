import Breadcrumbs from "@/components/Breadcrumbs";
import { ForumDisplay } from "@/components/ForumDisplay";
import { Stats } from "@/components/Stats";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <>
      <div>
        <Breadcrumbs crumbs={[]} />

        <div className="flex flex-col items-start justify-center gap-4">
          <ForumDisplay />
          <Stats />
          <ForumIconKey />
        </div>
      </div>
    </>
  );
}

function ForumIconKey() {
  return (
    <div className="flex flex-row items-center justify-start gap-4 text-sm">
      <span className="flex flex-row items-center gap-2">
        <img
          src="/images/icons/dot-filled-icon.svg"
          alt="New Replies"
          className="w-4"
        />
        Forum Has New Replies
      </span>
      <span className="flex flex-row items-center gap-2">
        <img
          src="/images/icons/dot-filled-icon-white.svg"
          alt="No New Replies"
          className="w-4"
        />
        Forum Has No New Replies
      </span>
      <span className="flex flex-row items-center gap-2">
        <img
          src="/images/icons/lock-closed.svg"
          alt="Locked Forum"
          className="w-4"
        />
        Forum is Locked
      </span>
    </div>
  );
}
