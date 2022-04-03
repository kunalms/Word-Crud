import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WordListComponent} from "./word-list/word-list.component";

const routes: Routes = [
  {path: '', redirectTo: 'words', pathMatch: 'full'},
  {path: 'words', component: WordListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
