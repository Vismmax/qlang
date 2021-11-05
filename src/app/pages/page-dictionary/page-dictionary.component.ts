import { Component, OnInit } from '@angular/core';
import { TypeWord, Word } from '../../services/models';
import { ViewCards } from '../shared/toggle-view/toggle-view.component';
import {
  SettingName,
  Settings,
  SettingsService,
} from '../../services/settings.service';
import { WordsService } from '../../services/words.service';
import { StateService } from '../../services/state.service';
import { map } from 'rxjs/operators';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-page-dictionary',
  templateUrl: './page-dictionary.component.html',
  styleUrls: ['./page-dictionary.component.scss'],
})
export class PageDictionaryComponent implements OnInit {
  words: Word[] = [];
  pageIndex = 0;
  viewCards: ViewCards = 'list';
  settings: Settings;

  constructor(
    private wordService: WordsService,
    private state: StateService,
    private settingsService: SettingsService
  ) {
    this.settings = settingsService.settings.value;
  }

  ngOnInit(): void {
    this.state.words.subscribe((res) => {
      this.words = res;
    });
    this.settingsService.settings.subscribe((res) => {
      this.settings = res;
    });
  }

  handlePageEvent(event: PageEvent) {
    // this.pageSize = event.pageSize;
    this.settingsService.setSetting({
      name: SettingName.pageSize,
      value: event.pageSize,
    });
    this.pageIndex = event.pageIndex;
  }

  handleChangeView(view: ViewCards) {
    this.viewCards = view;
  }

  handleChangeTypeWord({ word, type }: { word: Word; type: TypeWord }) {
    this.state.updateWord(word, { type });
  }
}
