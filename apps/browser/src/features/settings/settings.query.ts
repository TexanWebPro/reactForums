import { queryOptions } from "@tanstack/react-query";
import {
  fetchAllPublicSettings,
  fetchSettingByName,
  fetchSettingsByNames,
} from "./settings.api";

export const settingKeys = {
  all: ["settings"] as const,
  byName: (name: string) => ["settings", "byName", name] as const,
  byNames: (names: string[]) =>
    ["settings", "byNames", [...names].sort()] as const,
  public: () => ["settings", "public"] as const,
};

export const settingQueries = {
  byName: (name: string) =>
    queryOptions({
      queryKey: settingKeys.byName(name),
      queryFn: () => fetchSettingByName(name),
    }),

  byNames: (names: string[]) =>
    queryOptions({
      queryKey: settingKeys.byNames(names),
      queryFn: () => fetchSettingsByNames(names),
    }),

  public: () =>
    queryOptions({
      queryKey: settingKeys.public(),
      queryFn: () => fetchAllPublicSettings(),
    }),
};
