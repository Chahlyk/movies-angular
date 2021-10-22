import { Component, OnInit } from '@angular/core';
import { PosterService } from "../poster.service";
import { IPoster } from "../shared/interfaces";
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';
import { CartService } from "../cart.service";

@Component({
  selector: 'app-infos',
  templateUrl: './detail-poster.component.html',
  styleUrls: ['./detail-poster.component.css']
})
export class DetailPosterComponent implements OnInit {
  public poster!: IPoster
  public linkForImage: string = 'https://image.tmdb.org/t/p/w342';
  public loading: boolean = false;
  public required: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private posterService: PosterService,
    private location: Location,
    private cartService: CartService,
  ) { }

  public ngOnInit(): void {
    this.getPoster();
  }

  public getPoster(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.posterService.getPoster(id)
      .subscribe(poster => {
        this.poster = poster;
        this.loading = true;
      });
  }

  public goBack(): void {
    this.location.back();
  }

  public next() {

  }

  public addToFavourite(film: IPoster) {
    this.cartService.addToFavourite(film)
    this.required = true
    console.log('finish')
  }
}
