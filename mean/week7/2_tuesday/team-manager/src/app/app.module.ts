import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerAddComponent } from './player-add/player-add.component';
import { PlayerStatusComponent } from './player-status/player-status.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerAddComponent,
    PlayerStatusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
