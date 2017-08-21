import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCreationComponent } from './components/product-creation/product-creation.component';
import { IndexComponent } from './components/index/index.component';
import { routing } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreationComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
