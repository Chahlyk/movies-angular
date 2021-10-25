import { Injectable } from '@angular/core';
import { IPoster } from "./shared/interfaces";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public movies: IPoster[] = [];

  constructor() { }

  addToFavourite(film: IPoster) {
    if (this.movies.indexOf(film) === -1) {
      this.movies.push(film);
    } else return
  }

  getMovie() {
    return this.movies
  }

  removeFilm(film: IPoster) {
    const index = this.movies.indexOf(film);
    if (index > -1) {
      this.movies.splice(index, 1);
    }
  }

}
