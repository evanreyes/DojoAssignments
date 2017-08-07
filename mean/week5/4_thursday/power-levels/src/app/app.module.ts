import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PowerComponent } from './components/power/power.component';
import { HumanComponent } from './components/power/human/human.component';
import { SaiyanComponent } from './components/power/saiyan/saiyan.component';
import { SuperSaiyanComponent } from './components/power/super-saiyan/super-saiyan.component';
import { SuperSaiyanTwoComponent } from './components/power/super-saiyan-two/super-saiyan-two.component';
import { SuperSaiyanThreeComponent } from './components/power/super-saiyan-three/super-saiyan-three.component';
import { SuperSaiyanFourComponent } from './components/power/super-saiyan-four/super-saiyan-four.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerComponent,
    HumanComponent,
    SaiyanComponent,
    SuperSaiyanComponent,
    SuperSaiyanTwoComponent,
    SuperSaiyanThreeComponent,
    SuperSaiyanFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
