import { Type } from '@angular/core';

import { PageHomeComponent } from './page-home/page-home.component';
import { PageTextbookComponent } from './page-textbook/page-textbook.component';
import { PageDictionaryComponent } from './page-dictionary/page-dictionary.component';
import { PageStatisticsComponent } from './page-statistics/page-statistics.component';
import { PageSettingsComponent } from './page-settings/page-settings.component';
import { PageAuthComponent } from './page-auth/page-auth.component';

export interface ListPagesItem {
  title: string;
  path: string;
  route: string;
  component: Type<any>;
  iconName: string;
}

export const listPages: ListPagesItem[] = [
  {
    title: 'Home',
    path: 'home',
    route: '/home',
    component: PageHomeComponent,
    iconName: 'home',
  },
  {
    title: 'Textbook',
    path: 'textbook',
    route: '/textbook',
    component: PageTextbookComponent,
    iconName: 'local_library',
  },
  {
    title: 'Dictionary',
    path: 'dictionary',
    route: '/dictionary',
    component: PageDictionaryComponent,
    iconName: 'menu_book',
  },
  {
    title: 'Statistics',
    path: 'statistics',
    route: '/statistics',
    component: PageStatisticsComponent,
    iconName: 'equalizer',
  },
  {
    title: 'Settings',
    path: 'settings',
    route: '/settings',
    component: PageSettingsComponent,
    iconName: 'settings',
  },
  {
    title: 'Login',
    path: 'auth',
    route: '/auth',
    component: PageAuthComponent,
    iconName: 'person',
  },
];
