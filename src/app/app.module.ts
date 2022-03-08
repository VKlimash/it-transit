import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoaderModule} from './component/loader/loader.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TimerService} from './service/timer.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoaderModule,
    BrowserAnimationsModule
  ],
  providers: [TimerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
