import {interval, Observable, Subject, Subscription} from 'rxjs';

export class TimerService {
  private timerSub: Subscription;
  private timer = new Subject<number>();

  constructor() {
  }

  public start(end: number): void {
    this.timerStart(end);
  }

  private timerStart(end: number): void {
    let t = 0;
    this.timerSub = interval(1000).subscribe((i) => {
      t = t + 1;
      this.timer.next(t);
      if (t === end) {
        t = 0;
        this.timer.next(t);
        this.timerSub.unsubscribe();
      }
    });
  }

  public statusTimer(): Observable<any> {
    return this.timer.asObservable();
  }

}
