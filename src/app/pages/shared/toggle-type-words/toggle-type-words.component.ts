import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

import { TypeWord } from '../../../services/models';

@Component({
  selector: 'app-toggle-type-words',
  templateUrl: './toggle-type-words.component.html',
  styleUrls: ['./toggle-type-words.component.scss'],
})
export class ToggleTypeWordsComponent {
  Types: typeof TypeWord;

  @Input() type: TypeWord = TypeWord.learned;

  @Output() changeType: EventEmitter<TypeWord> = new EventEmitter();

  constructor() {
    this.Types = TypeWord;
  }

  handleChangeType(event: MatButtonToggleChange) {
    this.changeType.emit(event.value);
  }
}
