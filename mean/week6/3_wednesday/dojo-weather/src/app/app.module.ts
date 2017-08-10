import { WeatherService } from './weather.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BurbankComponent } from './components/burbank/burbank.component';
import { ChicagoComponent } from './components/chicago/chicago.component';
import { DallasComponent } from './components/dallas/dallas.component';
import { DcComponent } from './components/dc/dc.component';
import { SanjoseComponent } from './components/sanjose/sanjose.component';
import { SeattleComponent } from './components/seattle/seattle.component';
import { IndexComponent } from './components/index/index.component';
import { routing } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    BurbankComponent,
    ChicagoComponent,
    DallasComponent,
    DcComponent,
    SanjoseComponent,
    SeattleComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
