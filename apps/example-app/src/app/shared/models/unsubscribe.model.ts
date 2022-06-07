import { Subject } from "rxjs";
import { Component } from "@angular/core";

@Component({
  template: ""
})
export abstract class Unsubscribe {
  protected onDestroy$ = new Subject<boolean>();

  protected constructor() {
    this.onDestroy$ = new Subject<boolean>();
  }

  public abstract ngOnDestroy(): void;

  public onDestroy(): void {
    this.onDestroy$.next(false);
    this.onDestroy$.complete();
  }
}
