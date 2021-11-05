import { Component, OnInit } from '@angular/core';
import {
  SettingName,
  Settings,
  SettingsService,
} from '../../../services/settings.service';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-button-setting-cards',
  templateUrl: './button-setting-cards.component.html',
  styleUrls: ['./button-setting-cards.component.scss'],
})
export class ButtonSettingCardsComponent implements OnInit {
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
}
