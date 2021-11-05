export interface BaseWord {
  id: number;
  group: number;
  word: string;
  image: string;
  transcription: string;
  translate: string;
  audio: string;
  textMeaning: string;
  textExample: string;
  textExampleTranslate: string;
  textMeaningTranslate: string;
  audioMeaning: string;
  audioExample: string;
}

export interface UserWord {
  id?: number;
  // idWord: number;
  type: TypeWord;
  countCorrectly: number;
  countError: number;
}

export interface Info {
  id?: number;
  countWords: number;
  countGroups: number;
}

export interface Word extends BaseWord, Omit<UserWord, 'id' | 'idWord'> {}

export enum TypeWord {
  default = 'default',
  learned = 'learned',
  difficult = 'difficult',
  deleted = 'deleted',
}

export const emptyUserWord: Omit<UserWord, 'id' | 'idWord'> = {
  type: TypeWord.default,
  countCorrectly: 0,
  countError: 0,
};

export const emptyInfo: Info = {
  countWords: 0,
  countGroups: 0,
};
