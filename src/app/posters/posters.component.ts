import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

export interface Poster {
  adult: boolean,
  backdrop_path: string,
  id?: number,
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

@Component({
  selector: 'app-posters',
  templateUrl: './posters.component.html',
  styleUrls: ['./posters.component.css']
})
export class PostersComponent implements OnInit {

  tool: boolean = true
  posters: Poster[] = []
  linkForImage: string = 'https://image.tmdb.org/t/p/w342'

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Poster[]>('https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c', {
      params: new HttpParams().set('_limit','10')
    })
      .pipe(map((data: any) => data.results))
      .subscribe(response => {
        this.posters = response
        console.log(response)
      })
  }
}
