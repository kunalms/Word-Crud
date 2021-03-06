import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {WordListComponent} from './word-list/word-list.component';
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";
import {WordCardComponent} from './word-list/word-card/word-card.component';

@NgModule({
  declarations: [
    AppComponent,
    WordListComponent,
    WordCardComponent
  ],
  imports: [
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
