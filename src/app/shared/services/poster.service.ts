import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IData, IPoster } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PosterService {

  public constructor(private http: HttpClient) {}

  public getData(): Observable<IData> {
    return this.http.get<IData>('https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c', {
      params: new HttpParams().set('page','1')
    });
  }

  public getPoster(id: number): Observable<IPoster> {
    return this.http.get<IPoster>(`https://api.themoviedb.org/3/movie/${id}?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US`);
  }

}
