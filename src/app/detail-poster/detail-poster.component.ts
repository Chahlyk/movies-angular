import { Component, OnInit } from '@angular/core';
import { PosterService } from "../poster.service";
import { IPoster } from "../shared/interfaces";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from '@angular/common';
import { CartService } from "../cart.service";

@Component({
  selector: 'app-infos',
  templateUrl: './detail-poster.component.html',
  styleUrls: ['./detail-poster.component.css']
})
export class DetailPosterComponent implements OnInit {
  public posters: IPoster[] = []
  public poster!: IPoster
  public nextId!: IPoster
  public linkForImage: string = 'https://image.tmdb.org/t/p/w342';
  public loading: boolean = false;
  public required: boolean = false;
  public num!: number

  constructor(
    private route: ActivatedRoute,
    private posterService: PosterService,
    private location: Location,
    private cartService: CartService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.getPoster();
  }

  public getData() {
    this.posterService.getData()
      .subscribe(posters => {
        this.posters = posters.results
        this.num = this.posters.findIndex(film => film.id === this.poster.id)
        this.nextId = this.posters[this.num + 1]
        console.log(this.nextId.id)
      })
  }

  public getPoster(): void {
    this.route.params.subscribe(params => {
      this.posterService.getPoster(params.id)
        .subscribe(poster => {
          this.poster = poster;
          this.loading = true;
          this.getData();
        });
    });

  }

  public goBack(): void {
    this.location.back();
  }

  public addToFavourite(film: IPoster) {
    this.cartService.addToFavourite(film)
    this.required = true
    console.log('finish')
  }

  nextMovie() {
    this.router.navigate(['/details', this.nextId.id])
  }
}
