import {Component, OnDestroy} from "@angular/core";
import {Unsubscribe} from "./unsubscribe.model";
import {interval, Observable, takeUntil} from "rxjs";

@Component({
  template: ""
})
export class Observable1 extends Unsubscribe implements OnDestroy {
  private _source: Observable<number> = interval(1000);

  constructor() {
    super();
  }

  public get source(): Observable<number> {
    return this._source.pipe(takeUntil(this.onDestroy$))
  }

  public ngOnDestroy() {
    this.onDestroy();
  }
}
