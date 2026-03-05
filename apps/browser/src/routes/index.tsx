import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { IndexForumDisplayView } from "../views/IndexForumDisplay";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const { data } = useQuery({
    queryKey: ["forums"],
    queryFn: async () => {
      const res = await fetch("/api/forums/query/by-category");
      return res.json();
    },
  });

  if (!data) return;

  return (
    <>
      <IndexForumDisplayView forums={data} />
    </>
  );
}
