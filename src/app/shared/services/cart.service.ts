import { Injectable } from '@angular/core';
import { IPoster } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public movies: IPoster[] = [];
  public received: IPoster[] = [];
  public films!: string;

  public addToFavourite(film: IPoster): void {
    this.movies.push(film);
    localStorage.setItem('movies', JSON.stringify(this.movies));
  }

  public getMovie(): IPoster[] {
    this.films = <string>localStorage.getItem('movies');
    this.received = JSON.parse(this.films);
    return this.received;
  }

  public removeFilm(film: IPoster): void {
    const idx = this.received.indexOf(film);
    if (this.received[idx].id === film.id ) {
      this.received.splice(idx, 1);
      localStorage.clear();
      localStorage.setItem('movies', JSON.stringify(this.received));
    }
  }
}
