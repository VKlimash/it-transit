import {Component, Input} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {ILoader} from './interface-loader';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})


export class LoaderComponent {
  @Input() sizeSpinner?: any;
  @Input() colorSpinner?: string;
  @Input() backgroundSpinner?: string;
  @Input() typeSpinner?: string;
  @Input() fullScreenSpinner?: boolean;
  @Input() zIndexSpinner?: number;
  @Input() templateSpinner?: string;

  private readonly loader: ILoader;

  constructor(private spinner: NgxSpinnerService) {
    this.loader = {
      size: this.sizeSpinner || 'small',
      bdColor: this.backgroundSpinner || 'rgba(0,0,0, 0.1)',
      color: this.colorSpinner || 'white',
      fullScreen: this.fullScreenSpinner || false,
      type: this.typeSpinner || 'line-spin-fade',
      zIndex: this.zIndexSpinner || 1000,
      template: this.templateSpinner
    };
  }

  public startSpinner(name?: string, loaderOptions?: ILoader): void {
    if (name === undefined) {
      this.spinner.show('spinner', {
        ...this.loader,
        bdColor: '#FFFFFF',
        size: 'default',
        color: '#808082'
      });
    } else {
      this.spinner.show('spinner', {
        ...this.loader,
        ...loaderOptions
      });
    }

  }

  public stopSpinner(): void {
    this.spinner.hide('spinner');
  }
}
