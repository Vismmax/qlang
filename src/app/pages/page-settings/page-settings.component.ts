import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import {
  SettingName,
  Settings,
  SettingsService,
} from '../../services/settings.service';

@Component({
  selector: 'app-page-settings',
  templateUrl: './page-settings.component.html',
  styleUrls: ['./page-settings.component.scss'],
})
export class PageSettingsComponent implements OnInit {
  Names = SettingName;
  settings: Settings;

  constructor(private settingsService: SettingsService) {
    this.settings = settingsService.settings.value;
  }

  ngOnInit(): void {
    this.settingsService.settings.subscribe((res) => {
      this.settings = res;
    });
  }

  handleChangeSetting(event: MatCheckboxChange) {
    this.settingsService.setSetting({
      name: event.source.name as SettingName,
      value: event.checked,
    });
  }

  handleResetSettings() {
    this.settingsService.resetSetting();
  }
}
