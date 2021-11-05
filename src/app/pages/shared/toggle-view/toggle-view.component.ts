import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

export type ViewCards = 'list' | 'grid';

@Component({
  selector: 'app-toggle-view',
  templateUrl: './toggle-view.component.html',
  styleUrls: ['./toggle-view.component.scss'],
})
export class ToggleViewComponent {
  @Input() view: ViewCards = 'list';

  @Output() changeView: EventEmitter<ViewCards> = new EventEmitter();

  constructor() {}

  handleChangeView(event: MatButtonToggleChange) {
    this.changeView.emit(event.value);
  }
}
