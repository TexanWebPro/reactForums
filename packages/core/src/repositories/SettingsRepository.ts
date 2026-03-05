import { Setting, Settings } from "../domain/models";

export interface SettingsRepository {
  getAllSettings(): Promise<Settings>;
  getSettingByName(name: string): Promise<Setting | undefined>;
}
