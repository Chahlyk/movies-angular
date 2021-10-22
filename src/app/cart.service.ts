import { Injectable } from '@angular/core';
import { IPoster } from "./shared/interfaces";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public movies: IPoster[] = [];

  constructor() { }

  addToFavourite(film: IPoster) {
    this.movies.push(film);
  }

  getMovie() {
    return this.movies;
  }

}
