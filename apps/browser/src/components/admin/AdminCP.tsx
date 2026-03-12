import { CommunityOverview } from "./CommunityOverview";
import { ModerationQueue } from "./ModerationQueue";
import { RecentActivity } from "./RecentActivity";
import { SystemHealth } from "./SystemHealth";
import { Growth } from "./Growth";

export function AdminCP() {
  return (
    <div className="flex flex-col gap-10 items-center justify-between">
      <CommunityOverview />
      <RecentActivity />
      <ModerationQueue />
      <SystemHealth />
      <Growth />
    </div>
  );
}
