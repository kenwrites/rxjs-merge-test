// tslint:disable: variable-name

import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { zip } from 'rxjs';

interface Day {
  date: string;
  season: string;
  season_week: number;
  celebrations: [];
  weekday: string;
}

@Component({
  selector: 'app-zip-test',
  templateUrl: './zip-test.component.html',
  styleUrls: ['./zip-test.component.scss']
})

export class ZipTestComponent implements OnInit {

  days: Day[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const day_observer = {
      next: zipped_days => {
        console.log('on next:');
        console.dir(zipped_days);
        this.days = zipped_days;
      },
      error: error => console.error(error.message),
      complete: () => {
        console.log('on complete:');
        console.dir(this.days);
      }
    };
    this.zipDays().subscribe(day_observer);
  }

  zipDays(): Observable<Day[]> {
    const url1 = 'http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/today';
    const url2 = 'http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/tomorrow';
    const url3 = 'http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/2019/02/04';
    const request1 = this.http.get<Day>(url1);
    const request2 = this.http.get<Day>(url2);
    const request3 = this.http.get<Day>(url3);
    const request_array = [request1, request2, request3];
    const zipped_requests = zip(request_array);
    return zipped_requests;
  }

}
