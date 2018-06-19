// Angular core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Angular required
import {HttpModule} from '@angular/http';
import { CommonModule } from '@angular/common';

//Our modules only
import { PagesModule  } from './pages/pages.module';

//main component
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    PagesModule,
    CommonModule,
    BrowserModule,
    HttpModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
