import { Component, OnInit } from '@angular/core';
import { CartService } from "../../../cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public films = this.cartService.getMovie()
  public linkForImage: string = 'https://image.tmdb.org/t/p/w342'
  public acc: boolean = false

  constructor( private cartService: CartService ) { }

  ngOnInit(): void {
  }

}
