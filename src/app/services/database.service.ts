import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { BaseWord, Info, UserWord } from './models';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService extends Dexie {
  baseWords: Dexie.Table<BaseWord, number>;
  userWords: Dexie.Table<UserWord, number>;
  info: Dexie.Table<Info, number>;

  constructor() {
    super('QLang');
    this.version(1).stores({
      baseWords: '&id, group, word, translate',
      userWords: '&id, type, countCorrectly, countError',
      info: '&id, countWords, countGroups',
    });
    this.baseWords = this.table('baseWords');
    this.userWords = this.table('userWords');
    this.info = this.table('info');
  }

  async getInfo() {
    const info = await this.info.get(0);
    return info;
  }
}
