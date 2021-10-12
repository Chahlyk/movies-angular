import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Poster {
  adult: boolean,
  backdrop_path: string,
  id: number,
  genre_ids?: [],
  original_language?: string,
  original_title: string,
  overview: string,
  popularity?: number,
  poster_path: string,
  release_date: string,
  title: string,
  video?: boolean,
  vote_average: number,
  vote_count?: number
}

@Injectable({
  providedIn: 'root'
})
export class PosterService {

  constructor(private http: HttpClient) {}

  fetchAPI(): Observable<Poster[]> {
    return this.http.get<Poster[]>('https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c', {
      params: new HttpParams().set('_limit','10')
    })
  }

}
