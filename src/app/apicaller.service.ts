import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import rxjs map
import { map, shareReplay } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApicallerService {
  private _myreply = new BehaviorSubject<any[]>(null);
  cast = this._myreply.asObservable();

  constructor(private _http: HttpClient) {}

  private readonly request = this._http
    .get('https://swapi.dev/api/people/')
    .pipe(
      map((result) => result['results']),
      shareReplay()
    );

  getData() {
    console.log(Math.random() * 100 + ' getData()');
    return this.request;
  }

  editRes(nextRes) {
    this._myreply.next(nextRes);
  }
}
