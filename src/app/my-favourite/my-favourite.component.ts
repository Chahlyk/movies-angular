import { Component } from '@angular/core';
import { IPoster } from '../shared/interfaces';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-my-favourite',
  templateUrl: './my-favourite.component.html',
  styleUrls: ['./my-favourite.component.css']
})
export class MyFavouriteComponent {
  public films = this.cartService.getMovie();
  public linkForImage: string = 'https://image.tmdb.org/t/p/w342';

  public constructor(private cartService: CartService) { }

  public removeFilm(film: IPoster): void {
    this.cartService.removeFilm(film);
  }
}
