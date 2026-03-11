import { OptionsCode, SettingKey } from "@reactforums/core";
import { Setting, Settings, SettingsRepository } from "@reactforums/core/";
import { eq, inArray } from "drizzle-orm";
import { ReactForumsDrizzleSchema } from "src";
import { DrizzlePgDatabase } from "src/types";

export class DrizzleSettingRepository<TSchema extends ReactForumsDrizzleSchema>
  implements SettingsRepository
{
  db: DrizzlePgDatabase;
  schema: TSchema;

  constructor(db: DrizzlePgDatabase, schema: TSchema) {
    this.db = db;
    this.schema = schema;
  }

  async getSettingsByNames(names: string[]): Promise<Settings | undefined> {
    const settingsTable = this.schema.settings;
    const settings = await this.db
      .select()
      .from(settingsTable)
      .where(inArray(settingsTable.name, names));

    if (!settings) return;
    return settings.map((setting) => this.mapDbSettingToSetting(setting));
  }

  async getAllSettings(): Promise<Settings> {
    const settingsTable = this.schema.settings;
    const allSettings = await this.db.select().from(settingsTable);
    return allSettings.map((setting) => {
      return this.mapDbSettingToSetting(setting);
    });
  }

  async getSettingByName(name: string): Promise<Setting | undefined> {
    const settingsTable = this.schema.settings;
    const settings = await this.db
      .select()
      .from(settingsTable)
      .where(eq(settingsTable.name, name));

    const setting = settings[0];
    if (!setting) return;
    return this.mapDbSettingToSetting(setting);
  }

  mapDbSettingToSetting(setting: any): Setting {
    return {
      ...setting,
      name: setting.name as SettingKey,
      optionsCode: setting.optionsCode as OptionsCode,
    };
  }
}
