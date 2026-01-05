import { userService } from "@/api/client";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import type { Reputation } from "@reactforums/core";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/users/$userId/reputation")({
  loader: async ({ params }) => {
    const reputations = userService.getUserReputations(params.userId);
    return { reputations };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { reputations } = Route.useLoaderData();

  return (
    <>
      <Breadcrumbs crumbs={[]} />
      <div className="flex flex-col items-end justify-center">
        <Button text="Rate User" linkTo="/" icon="thumbsUp" />
        <span className="bg-sky-600 w-full p-4 py-2 mt-4 font-bold text-stone-50 border-2 border-sky-800 rounded-t-lg flex flex-row items-center justify-start gap-2">
          Reputation of Elegant Totality
        </span>
        <div className="flex w-full flex-col mb-4 border-2 border-sky-800 border-t-0 rounded-b-lg">
          {reputations.map((reputation) => {
            return (
              <>
                <Reputation {...reputation} />
              </>
            );
          })}
        </div>

        <Button text="Rate User" linkTo="/" icon="thumbsUp" />
      </div>
    </>
  );
}

function Reputation(reputation: Reputation) {
  return (
    <>
      <div className="flex w-full flex-col border-b-2 border-sky-800">
        <pre>{JSON.stringify(reputation, null, 2)}</pre>
      </div>
    </>
  );
}
