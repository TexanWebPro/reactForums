import { format, formatDistance } from "date-fns";

export function formatDateTimeForForumDisplay(date: Date) {
  return format(date, "MM-dd-yyyy, h:mm a");
}

export function formatLastPostDateTime(date: Date) {
  return formatDistance(new Date(), date);
}

export function formatDateTimeForStatsDisplay(date: Date) {
  return format(date, "PPPPp");
}
