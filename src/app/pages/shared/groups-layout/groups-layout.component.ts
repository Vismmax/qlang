import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { StateService } from '../../../services/state.service';
import { TypeWord } from '../../../services/models';

@Component({
  selector: 'app-groups-layout',
  templateUrl: './groups-layout.component.html',
  styleUrls: ['./groups-layout.component.scss'],
})
export class GroupsLayoutComponent implements OnInit {
  groups: number[] = [];
  activeGroup: number = 0;
  activeTypeWords: TypeWord = TypeWord.learned;

  @Input() title: string = '';
  @Input() showToggleTypeWords: boolean = false;

  isXSmall$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.XSmall)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private state: StateService
  ) {}

  ngOnInit(): void {
    this.state.setActiveTypeWords(
      this.showToggleTypeWords ? TypeWord.learned : TypeWord.default
    );
    this.state.groups.subscribe((res) => {
      this.groups = res;
    });
    this.state.activeGroup.subscribe((res) => {
      this.activeGroup = res;
    });
    this.state.activeTypeWords.subscribe((res) => {
      this.activeTypeWords = res;
    });
  }

  handleSelectActiveGroup(group: number) {
    this.state.setActiveGroup(group);
  }

  handleSelectActiveTypeWords(type: TypeWord) {
    this.state.setActiveTypeWords(type);
  }
}
