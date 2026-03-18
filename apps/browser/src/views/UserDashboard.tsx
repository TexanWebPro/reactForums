import { Link } from "@tanstack/react-router";
import { AccountSummary } from "../components/AccountSummary";
import { UserCPNav } from "../components/layout/UserCPNav";
import { SingleUserLatestTopics } from "../components/SingleUserLatestTopics";
import Breadcrumbs from "@/components/Breadcrumbs";

export function UserDashboardView() {
  return (
    <>
      <Breadcrumbs crumbs={[{ label: "User Control Panel" }]} />
      <div className="flex flex-row items-start justify-between gap-4 w-full">
        <UserCPNav />
        <span className="w-5/6 flex flex-col gap-8">
          <AccountSummary />
          <SingleUserLatestTopics />
        </span>
      </div>
    </>
  );
}
