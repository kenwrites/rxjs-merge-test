import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MergeTestComponent } from './merge-test/merge-test.component';
import { CatcherrorTestComponent } from './catcherror-test/catcherror-test.component';
import { ReturnOnCompleteComponent } from './return-on-complete/return-on-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    MergeTestComponent,
    CatcherrorTestComponent,
    ReturnOnCompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
