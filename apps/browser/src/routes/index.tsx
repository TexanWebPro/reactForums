import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { IndexForumDisplayView } from "../views/IndexForumDisplay";
import { forumQueries } from "@/features/forums/forums.query";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const { data } = useQuery({
    ...forumQueries.byCategory(),
  });

  if (!data) return;

  return (
    <>
      <IndexForumDisplayView forums={data} />
    </>
  );
}
