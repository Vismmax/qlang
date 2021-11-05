import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Word {
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
  group: number;
}

const urlJsonDb = 'assets/db.json';

@Injectable({
  providedIn: 'root',
})
export class WordsApiService {
  constructor(private http: HttpClient) {}

  public getDb(): Observable<any> {
    return this.http.get(urlJsonDb);
  }
}
