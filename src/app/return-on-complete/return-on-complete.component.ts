import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { merge } from 'rxjs';

interface Day {
  date: string;
  season: string;
  season_week: number;
  celebrations: [];
  weekday: string;
}


@Component({
  selector: 'app-return-on-complete',
  templateUrl: './return-on-complete.component.html',
  styleUrls: ['./return-on-complete.component.scss']
})
export class ReturnOnCompleteComponent implements OnInit {

  constructor( private http: HttpClient) { }

  ngOnInit() {
    // this.returnOnComplete().subscribe(days => {
    //   console.log(`final array:`);
    //   console.dir(days);
    // });
    // this.observableWrapper().subscribe(days => {
    //   console.log(`final array:`);
    //   console.dir(days);
    // });
  }


  // observableWrapper(): Observable<Day[]> {
  //   const days: Day[] = [];

  //   const url1 = 'http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/today';
  //   const url2 = 'http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/tomorrow';
  //   const url3 = 'http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/2019/02/04';
  //   const request1 = this.http.get(url1);
  //   const request2 = this.http.get(url2);
  //   const request3 = this.http.get(url3);
  //   const requests = merge(request1, request2, request3);

  //   const day_observer = {
  //     next: day => {
  //       days.push(day);
  //       console.log(`array:`);
  //       console.dir(days);
  //       if (days.length === 3) {
  //         return of(days);
  //       }
  //     },
  //     error: error => console.error(error.message),
  //     complete: () => {
  //       // error:  A function whose declared type is neither 'void' nor 'any' must return a value
  //       return of(days);
  //     }
  //   };


    // requests.subscribe(day_observer);

    // problem:  method returns 'days' before the http requests have been completed. It's just an empty array.
    // return of(days);

  // } // end observableWrapper


  // returnOnComplete(): Observable<Day[]> {
  //   const days: Day[] = [];

  //   const url1 = 'http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/today';
  //   const url2 = 'http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/tomorrow';
  //   const url3 = 'http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/2019/02/04';
  //   const request1 = this.http.get(url1);
  //   const request2 = this.http.get(url2);
  //   const request3 = this.http.get(url3);
  //   const requests = merge(request1, request2, request3);

  //   const day_observer = {
  //     next: day => {
  //       days.push(day);
  //       console.log(`array:`);
  //       console.dir(days);
  //       if (days.length === 3) {
  //         return of(days);
  //       }
  //     },
  //     error: error => console.error(error.message),
  //     complete: () => {
  //       // error:  A function whose declared type is neither 'void' nor 'any' must return a value
  //       return of(days);
  //     }
  //   };

  //   requests.subscribe(day_observer);

  //   // problem:  method returns 'days' before the http requests have been completed. It's just an empty array.
  //   // return of(days);

  // }

}
