import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { IData, IPoster } from "./shared/interfaces";


@Injectable({
  providedIn: 'root'
})
export class PosterService {

  constructor(private http: HttpClient) {}

  getData(): Observable<IData> {
    const posters = this.http.get<IData>('https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c', {
      params: new HttpParams().set('page','1')
    })
    return posters;
  }

  getPoster(id: number): Observable<IPoster[]> {
    const poster = this.http.get<IPoster[]>('https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c')
      .find( p => p.id === id )!;
    return of( poster );
  }
}
