import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';

@Component({
  selector: 'app-page-sidebar',
  templateUrl: './page-sidebar.component.html',
  styleUrls: ['./page-sidebar.component.scss'],
})
export class PageSidebarComponent implements OnInit {
  @Input() groups: number[] = [];
  @Output() activeGroup: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleSelectGroup(listGroups: MatSelectionList) {
    this.activeGroup.emit(listGroups.selectedOptions.selected[0].value);
  }
}
