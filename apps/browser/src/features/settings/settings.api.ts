import type { Setting, Settings } from "@reactforums/core";
import { getJson } from "@/lib/http";

export async function fetchSettingByName(name: string): Promise<Setting> {
  return getJson<Setting>(
    `/api/settings/query/by-name?name=${encodeURIComponent(name)}`,
  );
}

export async function fetchSettingsByNames(names: string[]): Promise<Settings> {
  const params = new URLSearchParams();

  for (const name of names) {
    params.append("name", name);
  }

  return getJson<Settings>(`/api/settings/query/by-names?${params.toString()}`);
}

export async function fetchAllPublicSettings(): Promise<Settings> {
  return getJson<Settings>(`/api/settings/query/public`);
}
