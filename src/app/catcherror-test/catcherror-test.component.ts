import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, catchError, take } from 'rxjs/operators';

@Component({
  selector: 'app-catcherror-test',
  templateUrl: './catcherror-test.component.html',
  styleUrls: ['./catcherror-test.component.scss']
})
export class CatcherrorTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.testCatchError();
  }

  testCatchError() {
    of(1, 2, 3, 4, 5).pipe(
      map(n => {
        if (n === 4) {
          // tslint:disable-next-line: no-string-throw
          throw 'four!';
        }
        return n;
      }),
      catchError(error => { throw new Error('error in source.  Details: ' + error); })
    )
      .subscribe(
        x => console.log(x),
        err => console.error(err)
    );
  // 1, 2, 3, I, II, III, IV, V
  }


}
