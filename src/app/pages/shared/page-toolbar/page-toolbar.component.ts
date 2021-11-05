import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-page-toolbar',
  templateUrl: './page-toolbar.component.html',
  styleUrls: ['./page-toolbar.component.scss'],
})
export class PageToolbarComponent {
  @Input() title: string = '';
  @Input() showBtnToggle: boolean | null = false;

  @Output() toggleSidebar: EventEmitter<void> = new EventEmitter();

  constructor() {}

  handleToggleSidebar() {
    this.toggleSidebar.emit();
  }
}
