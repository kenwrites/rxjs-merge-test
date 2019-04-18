import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-return-on-complete',
  templateUrl: './return-on-complete.component.html',
  styleUrls: ['./return-on-complete.component.scss']
})
export class ReturnOnCompleteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(this.returnOnComplete());
  }

  returnOnComplete(): any {
    const array = [];

    const observable = of(1, 2, 3);

    const observer = {
      next: x => {
        array.push(x);
        console.log(`array: ${array}`);
      },
      error: error => console.error(error.message),
      complete: () => {
        return array;
      }
    };

    observable.subscribe(observer);

  }

}
