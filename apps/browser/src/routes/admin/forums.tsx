import { AdminForums } from "@/components/admin/AdminForums";
import { forumQueries } from "@/features/forums/forums.query";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/forums")({
  ssr: false,
  staticData: { adminLayout: true },
  component: RouteComponent,
});

function RouteComponent() {
  const { data } = useQuery({
    ...forumQueries.byCategory(),
  });

  if (!data) return;

  return (
    <>
      <AdminForums forums={data} />
    </>
  );
}
