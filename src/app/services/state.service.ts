import { Injectable } from '@angular/core';
import { WordsService } from './words.service';
import { BehaviorSubject } from 'rxjs';
import { TypeWord, UserWord, Word } from './models';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  public words: BehaviorSubject<Word[]> = new BehaviorSubject<Word[]>([]);
  public groups: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
  public activeGroup: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public activeTypeWords: BehaviorSubject<TypeWord> =
    new BehaviorSubject<TypeWord>(TypeWord.default);

  constructor(private wordsService: WordsService) {
    this.wordsService.initDb.subscribe((res) => {
      if (!res) return;
      this.updateWords();
      this.updateGroups();
    });
    this.activeGroup.subscribe(() => {
      this.updateWords();
    });
    this.activeTypeWords.subscribe(() => {
      this.updateWords();
    });
  }

  private async updateWords() {
    const words = await this.wordsService.getWords(
      this.activeGroup.value,
      this.activeTypeWords.value
    );
    this.words.next(words);
  }

  private async updateGroups() {
    const groups = await this.wordsService.getGroups();
    this.groups.next(groups);
  }

  async setActiveGroup(group: number) {
    this.activeGroup.next(group);
  }

  async setActiveTypeWords(type: TypeWord) {
    this.activeTypeWords.next(type);
  }

  async updateWord(word: Word, props: Partial<UserWord>) {
    await this.wordsService.updateWord(word, props);
    this.updateWords();
  }
}
