import {NgModule} from '@angular/core';
import {NgxSpinnerModule, NgxSpinnerService} from 'ngx-spinner';
import {LoaderComponent} from './loader.component';

@NgModule({
  declarations: [LoaderComponent],
  imports: [NgxSpinnerModule],
  providers: [NgxSpinnerService],
  exports: [LoaderComponent]
})

export class LoaderModule {

}
