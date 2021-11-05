import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { listPages } from './pages/list-pages';

const routes: Routes = [
  ...listPages.map(({ path, component }) => ({ path, component })),
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
