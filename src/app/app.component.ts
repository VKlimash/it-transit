import {Component, OnInit, SkipSelf} from '@angular/core';
import {LoaderComponent} from './component/loader/loader.component';
import {TimerService} from './service/timer.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [LoaderComponent, TimerService],
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'TEST';
  public loaderTwo: boolean;
  public loaderOne: boolean;
  public text = 0;
  public text2 = 0;
  private timerStr1: Subscription;
  private timerStr2: Subscription;

  constructor(private loaderComponent: LoaderComponent,
              @SkipSelf() private timerServiceTwo: TimerService,
              private timerService: TimerService) {
  }

  ngOnInit(): void {
    this.loaderComponent.startSpinner();
    this.loaderOneAction(2, 2);
    this.loaderTwoAction(3, 3);
  }

  private loaderOneAction(end: number, pause: number): void {
    this.timerService.start(end);
    this.loaderOne = true;
    this.timerStr1 = this.timerService.statusTimer().subscribe(status => {
      if (status === 0) {
        this.loaderOne = false;
        this.text = this.text + 1;
        this.timerStr1.unsubscribe();
        setTimeout(() => {
          console.log(`( loader-One ) Number process-${this.text}`);
          this.loaderOneAction(end, pause);
        }, pause * 1000);
      }

    });
  }

  private loaderTwoAction(end: number, pause: number): void {
    this.timerServiceTwo.start(end);
    this.loaderTwo = true;
    this.timerStr2 = this.timerServiceTwo.statusTimer().subscribe(status => {
      if (status === 0) {
        this.loaderTwo = false;
        this.text2 = this.text2 + 1;
        this.timerStr2.unsubscribe();
        setTimeout(() => {
          console.log(`( loader-Two ) Number process-${this.text2}`);
          this.loaderTwoAction(end, pause);
        }, pause * 1000);
      }
    });
  }

}
