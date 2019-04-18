// tslint:disable: variable-name

import { Component, OnInit } from '@angular/core';
import { merge, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// ************************************************************** */
// Demo from rxjs docs
/**************************************************************** */

// const clicks = fromEvent(document, 'click').pipe(take(5));
// const timer = interval(1000).pipe(take(5));
// const timer2 = interval(500).pipe(take(5));
// const concurrent = 2;
// const clicksOrTimer = merge(clicks, timer, timer2, concurrent);
// clicksOrTimer.subscribe(
//   x => console.log(x),
//   err => console.error(err.message),
//   () => console.log('complete')

// );

// ************************************************************** */
// test merging http.get
/**************************************************************** */



@Component({
  selector: 'app-merge-test',
  templateUrl: './merge-test.component.html',
  styleUrls: ['./merge-test.component.scss']
})
export class MergeTestComponent implements OnInit {

  holy_days;
  have_holy_days;

  constructor(private http: HttpClient) {
    this.holy_days = [];
    this.have_holy_days = false;
  }

  ngOnInit() {
    this.getDays();
  }

  httpTest(api_url: string) {
    return this.http.get(api_url);
  }

  mergeRequests() {
    const today_url = 'http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/today';
    const tomorrow_url = 'http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/tomorrow';
    const day_url = 'http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/2019/3/4';
    const today_request = this.httpTest(today_url);
    const tomorrow_request = this.httpTest(tomorrow_url);
    const day_request = this.httpTest(day_url);
    console.dir(day_request);
    const requests = [today_request, tomorrow_request, day_request];
    let merged_requests = requests[0];
// tslint:disable-next-line: no-shadowed-variable
    requests.forEach((request, i) => {
      if (i > 0) { merged_requests = merge(merged_requests, request); }
    });
    console.dir(merged_requests);
    return merged_requests;
  }

  getDays() {
    const observer = {
      next: day => {
        this.holy_days.push(day);
        console.dir(this.holy_days);
      },
      error: error => console.error(error.message),
      complete: () => {
        console.log('complete');
        this.have_holy_days = true;
      }
    };
    const requests = this.mergeRequests();
    requests.subscribe(observer);
  }




}
