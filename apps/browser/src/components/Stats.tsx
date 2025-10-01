import { statsService, userService } from "@/api/client";
import { Link } from "@tanstack/react-router";
import { ForumStats } from "@reactforums/core";
import { ForumStatsView } from "@reactforums/common/models";
import { formatNumber } from "@reactforums/common/utils/numbers";

export function Stats() {
  const unformattedStats = statsService.getGlobalStats();
  const latestUser = userService.latestUser();

  function formatStats(stats: ForumStats): ForumStatsView {
    return {
      postCount: formatNumber(stats.postCount),
      threadCount: formatNumber(stats.threadCount),
      memberCount: formatNumber(stats.memberCount),
      mostOnlineAtOnce: formatNumber(stats.mostOnlineAtOnce),
      mostOnlineAtOnceDate: stats.mostOnlineAtOnceDate,
    };
  }

  const boardStats = formatStats(unformattedStats);

  return (
    <>
      <div className="w-full bg-stone-200 flex flex-col rounded-lg">
        <span className="bg-sky-600 w-full p-4 py-2 font-bold text-stone-50 text-lg border-2 border-sky-800 rounded-t-lg flex flex-row items-center justify-start gap-2">
          Board Statistics
        </span>

        <div className="p-4 border-2 border-stone-300 rounded-b-lg flex flex-col items-start justify-between text-sm gap-2">
          <p>
            Our members have made a total of {boardStats.postCount} posts in{" "}
            {boardStats.threadCount} threads.
          </p>
          <p>We currently have {boardStats.memberCount} members registered.</p>
          <p>
            Please welcome our newest member,{" "}
            <Link to="/" className="text-sky-700 font-bold">
              {latestUser.username}
            </Link>
          </p>
          <p>
            The most users online at one time was {boardStats.mostOnlineAtOnce}{" "}
            on {boardStats.mostOnlineAtOnceDate.toString()}
            PM
          </p>
        </div>
      </div>
    </>
  );
}
