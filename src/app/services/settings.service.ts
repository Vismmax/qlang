import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum SettingName {
  showPageSize = 'showPageSize',
  pageSize = 'pageSize',
  pageSizeOptions = 'pageSizeOptions',
  showTranslationCard = 'showTranslationCard',
  showButtonsCard = 'showButtonsCard',
}

export interface Settings {
  showPageSize: boolean;
  pageSize: number;
  pageSizeOptions: number[];
  showTranslationCard: boolean;
  showButtonsCard: boolean;
}

interface SetSettings {
  name: SettingName;
  value: boolean | number | string;
}

const initSettings = {
  showPageSize: false,
  pageSize: 20,
  pageSizeOptions: [10, 20, 50],
  showTranslationCard: true,
  showButtonsCard: true,
};

const keySettings = 'settings';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  public settings: BehaviorSubject<Settings> = new BehaviorSubject<Settings>({
    ...initSettings,
  });

  constructor() {
    const settings = this.getLocalSettings() || { ...initSettings };
    this.settings.next(settings);
  }

  setSetting({ name, value }: SetSettings) {
    const settings = { ...this.settings.value, [name]: value };
    this.settings.next(settings);
    this.setLocalSettings(settings);
  }

  resetSetting() {
    const settings = { ...initSettings };
    console.log('settings: ', settings);
    this.settings.next(settings);
    this.clearLocalSettings();
  }

  private getLocalSettings(): Settings | null {
    const settings = window.localStorage.getItem(keySettings);
    if (settings) return JSON.parse(settings);
    return null;
  }

  private setLocalSettings(settings: Settings): void {
    window.localStorage.setItem(keySettings, JSON.stringify(settings));
  }

  private clearLocalSettings(): void {
    window.localStorage.removeItem(keySettings);
  }
}
