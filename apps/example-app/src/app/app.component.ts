import { Component } from '@angular/core';
import {Observable1} from "./shared";

@Component({
  selector: 'angular-unsubscription-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private observable1: Observable1 | null | undefined;
  private sourceLogs: string[];

  public get logs(): string[] {
    return this.sourceLogs;
  }

  constructor() {
    this.sourceLogs = [];
  }

  public initObservable1() {
    if (!this.observable1) {
      this.observable1 = new Observable1();
    }
    this.observable1.source.subscribe((next: number) => {
      this.sourceLogs.push(next.toString());
    });
  }

  public clearObservable1() {
    this.observable1?.ngOnDestroy();
    this.observable1 = null;
    this.sourceLogs = [];
  }
}
