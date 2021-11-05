import { Injectable } from '@angular/core';
import { WordsApiService } from '../API/words-api.service';
import {
  emptyInfo,
  emptyUserWord,
  Info,
  TypeWord,
  UserWord,
  Word,
} from './models';
import { DatabaseService } from './database.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WordsService {
  public initDb: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private api: WordsApiService, private db: DatabaseService) {
    this.init();
  }

  async init(): Promise<void> {
    const count = await this.db.baseWords.count();
    if (count) {
      this.initDb.next(true);
      return;
    }
    this.api.getDb().subscribe(async (res) => {
      await this.db.baseWords.bulkAdd(res.words);
      await this.db.info.add({ id: 0, ...res.info });
      this.initDb.next(true);
    });
  }

  async getInfo(): Promise<Info> {
    const info = (await this.db.getInfo()) || { ...emptyInfo };
    return info;
  }

  async countWords(group?: number): Promise<number> {
    return group !== undefined
      ? await this.db.baseWords
          .where('group')
          .equals(group as number)
          .count()
      : await this.db.baseWords.count();
  }

  async countGroups(): Promise<number> {
    const count = await this.db.getInfo();
    return count?.countGroups || 0;
  }

  async getWords(
    group: number = 0,
    type: TypeWord = TypeWord.default
  ): Promise<Word[]> {
    const baseWords = await this.db.baseWords
      .where('group')
      .equals(group)
      .toArray();
    const ids = baseWords.map((word) => word.id);
    const userWords = await this.db.userWords.where('id').anyOf(ids).toArray();

    const words = baseWords.map((word) => ({
      ...word,
      ...(userWords.find((w) => w.id === word.id) || emptyUserWord),
    }));

    switch (type) {
      case TypeWord.default:
        return words.filter((w) => w.type !== TypeWord.deleted);
      case TypeWord.learned:
        return words.filter(
          (w) => w.type === TypeWord.learned || w.type === TypeWord.difficult
        );
      default:
        return words.filter((w) => w.type === type);
    }

    // return type === TypeWord.default
    //   ? words.filter((w) => w.type !== TypeWord.deleted)
    //   : words.filter((w) => w.type === type);
  }

  async getGroups(): Promise<number[]> {
    const info = await this.db.getInfo();
    const countGroups = info?.countGroups || 0;

    return new Array(countGroups).fill(0).map((v, id) => id);
  }

  async updateWord(word: Word, props: Partial<UserWord>) {
    const dbWord = await this.db.userWords.get(word.id);
    if (dbWord) {
      await this.db.userWords.update(word.id, props);
    } else {
      const test = await this.db.userWords.add({
        ...emptyUserWord,
        ...props,
        id: word.id,
      });
    }
  }
}
