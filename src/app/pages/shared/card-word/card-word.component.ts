import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TypeWord, Word } from '../../../services/models';

@Component({
  selector: 'app-card-word',
  templateUrl: './card-word.component.html',
  styleUrls: ['./card-word.component.scss'],
})
export class CardWordComponent implements OnInit {
  Types: typeof TypeWord;

  constructor() {
    this.Types = TypeWord;
  }

  @Input() word: Word = {} as Word;
  @Input() view: 'list' | 'grid' = 'list';
  @Input() showTranslate: boolean = true;
  @Input() showButtons: boolean = true;

  @Output() changeType: EventEmitter<{ word: Word; type: TypeWord }> =
    new EventEmitter();

  playing = false;

  ngOnInit(): void {}

  playAudio() {
    this.playing = true;
    let audio = new Audio();
    audio.src = `assets/files/${this.word?.audio}`;
    audio.load();
    audio.play().then(() => {
      this.playing = false;
    });
  }

  handleDifficult() {
    this.changeType.emit({
      word: this.word,
      type:
        this.word.type === TypeWord.difficult
          ? TypeWord.default
          : TypeWord.difficult,
    });
  }

  handleDelete() {
    this.changeType.emit({
      word: this.word,
      type:
        this.word.type === TypeWord.deleted
          ? TypeWord.default
          : TypeWord.deleted,
    });
  }
}
