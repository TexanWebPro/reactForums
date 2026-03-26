import { ForumTreeNode } from "@reactforums/core";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ForumDisplay } from "@/components/ForumDisplay";
import { ForumIconKey } from "@/components/ForumIconKey";
import { Stats } from "@/components/Stats";

export function IndexForumDisplayView(props: { forums: ForumTreeNode[] }) {
  return (
    <>
      <div>
        <Breadcrumbs crumbs={[]} />

        <div className="flex flex-col items-start justify-center gap-4">
          <ForumDisplay forums={props.forums} />
          <Stats />
          <ForumIconKey />
        </div>
      </div>
    </>
  );
}
