import { Link } from "@tanstack/react-router";
import { AccountSummary } from "../components/AccountSummary";
import { UserCPNav } from "../components/layout/UserCPNav";
import { SingleUserLatestTopics } from "../components/SingleUserLatestTopics";

export function UserDashboardView() {
  return (
    <>
      <span className="text-sm font-bold flex flex-row items-center justify-start gap-2 pb-4">
        <Link to="/">rF Community Forums</Link>
        <p>{`->  User Control Panel`}</p>
      </span>
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
