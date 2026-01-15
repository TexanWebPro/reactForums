import { format, formatDistance } from "date-fns";

export function formatDateTimeForForumDisplay(date: Date) {
  return format(date, "MM-dd-yyyy, h:mm a");
}

export function formatDateTimeForUserProfile(date: Date) {
  return format(date, "MM-dd-yyyy");
}

export function formatLastPostDateTime(date: Date) {
  return formatDistance(new Date(), date);
}

export function formatDateTimeForStatsDisplay(date: Date) {
  return format(date, "PPPPp");
}

export function formatDateForPostInfoDisplay(date: Date) {
  return format(date, "MMM yyyy");
}
