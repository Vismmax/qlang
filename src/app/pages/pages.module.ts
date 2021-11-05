import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';

import { PageLayoutComponent } from './page-layout/page-layout.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageDictionaryComponent } from './page-dictionary/page-dictionary.component';
import { PageTextbookComponent } from './page-textbook/page-textbook.component';
import { PageStatisticsComponent } from './page-statistics/page-statistics.component';
import { PageSettingsComponent } from './page-settings/page-settings.component';
import { PageAuthComponent } from './page-auth/page-auth.component';
import { CardWordComponent } from './shared/card-word/card-word.component';
import { AuthFormComponent } from './page-auth/auth-form/auth-form.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { PageToolbarComponent } from './shared/page-toolbar/page-toolbar.component';
import { PageSidebarComponent } from './shared/page-sidebar/page-sidebar.component';
import { ToggleViewComponent } from './shared/toggle-view/toggle-view.component';
import { GroupsLayoutComponent } from './shared/groups-layout/groups-layout.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ButtonSettingCardsComponent } from './shared/button-setting-cards/button-setting-cards.component';
import { ToggleTypeWordsComponent } from './shared/toggle-type-words/toggle-type-words.component';

@NgModule({
  declarations: [
    PageHomeComponent,
    PageLayoutComponent,
    PageDictionaryComponent,
    PageTextbookComponent,
    PageStatisticsComponent,
    PageSettingsComponent,
    PageAuthComponent,
    CardWordComponent,
    AuthFormComponent,
    PageToolbarComponent,
    PageSidebarComponent,
    ToggleViewComponent,
    GroupsLayoutComponent,
    ButtonSettingCardsComponent,
    ToggleTypeWordsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    RouterModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    MatCheckboxModule,
  ],
})
export class PagesModule {}
