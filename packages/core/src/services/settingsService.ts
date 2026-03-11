import { Setting, SettingKey, Settings } from "../domain/models";
import { SettingsRepository } from "../repositories/SettingsRepository";

export class SettingsService {
  constructor(private repository: SettingsRepository) {}

  async getByName(name: SettingKey): Promise<Setting | undefined> {
    const setting = await this.repository.getSettingByName(name);
    return setting;
  }

  async getByNames(names: SettingKey[]): Promise<Settings | undefined> {
    const settings = await this.repository.getSettingsByNames(names);
    return settings;
  }
}
