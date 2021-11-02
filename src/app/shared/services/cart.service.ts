import { Injectable } from '@angular/core';
import { IPoster } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public movies: IPoster[] = [];

  public addToFavourite(film: IPoster): void {
    const movies = this.getMovie();
    const idx = movies.find(item => item.id === film.id);
    if (!idx) {
      movies.push( film );
      localStorage.setItem( 'movies', JSON.stringify( movies ) );
    }
  }

  public getMovie(): IPoster[] {
    return JSON.parse(<string>localStorage.getItem('movies'));
  }

  public removeFilm(film: IPoster): void {
    const movies = this.getMovie();
    const idx = movies.findIndex(item => item.id === film.id);
    movies.splice(idx, 1);
    localStorage.clear();
    localStorage.setItem('movies', JSON.stringify(movies));
  }
}
