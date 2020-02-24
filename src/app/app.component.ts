import { Component, OnInit } from '@angular/core';

import { Status } from './handle-enum/option-one';
import { STATUS, STATUS_LABLE } from './handle-enum/option-two';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Hanle expand enum in Typescript';

  ngOnInit(): void {
    this.handleEnumWithClass();
    this.handleEnumWithMap();
  }

  private handleEnumWithClass(): void {
    const key: string = Status.ACTIVE.key;
    const displayKey: string = Status.ACTIVE.displayValue;

    const _key: string = Status.parseEnum('ACTIVE').key;
    const _displayKey: string = Status.parseEnum('ACTIVE').displayValue;
  }

  private handleEnumWithMap(): void {
    const _key: string = STATUS[STATUS.ACTIVE];
    const _displayKey: string = STATUS_LABLE.get(STATUS.ACTIVE);
  }

}
