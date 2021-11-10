import { Component, OnInit, } from '@angular/core';
import { PosterService } from "../shared/services/poster.service";
import { IPoster } from '../shared/interfaces';
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from '@angular/common';
import { CartService } from "../shared/services/cart.service";

@Component({
  selector: 'app-infos',
  templateUrl: './detail-poster.component.html',
  styleUrls: ['./detail-poster.component.css']
})
export class DetailPosterComponent implements OnInit{
  public poster!: IPoster;
  public linkForImage: string = 'https://image.tmdb.org/t/p/w342';
  public title: string = 'Add to favourite';
  public titleMobile: string = '☆'
  public loading: boolean = false;
  public required: boolean = true;
  private posters: IPoster[] = [];
  private nextPoster!: IPoster;
  private idx!: number;

  public constructor(
    private router: Router,
    private route: ActivatedRoute,
    private posterService: PosterService,
    private location: Location,
    private cartService: CartService,
  ) { }

  public ngOnInit(): void {
    this.getPoster();
  }

  public toggle(film: IPoster): void {
    if (this.required) {
      this.title = 'Unfavourite';
      this.addToFavourite(film);
    } else {
      this.title = 'Add to favourite';
      this.removeFilm(film);
    }
  }

  public toggleMobile(film: IPoster): void {
    if (this.required) {
      this.titleMobile = '★';
      this.addToFavourite(film);
    } else {
      this.titleMobile = '☆';
      this.removeFilm(film);
    }
  }

  public goBack(): void {
    this.location.back();
  }

  public nextMovie(): void {
    this.router.navigate(['/detail', this.nextPoster.id]);
  }

  private addToFavourite(film: IPoster): void {
    this.cartService.addToFavourite(film);
  }

  private removeFilm(film: IPoster) {
    this.cartService.removeFilm(film);
  }

  private getData(): void {
    this.posterService.getData(1)
      .subscribe(posters => {
        this.posters = posters.results;
        this.idx = this.posters.findIndex(film => film.id === this.poster.id);
        this.nextPoster = this.posters[this.idx + 1];
        this.checkButtonToggle();
      })
  }

  private getPoster(): void {
    this.route.params.subscribe(params => {
      this.posterService.getPoster(params.id)
        .subscribe(poster => {
          this.poster = poster;
          this.loading = true;
          this.getData();
        });
    });
  }

  private checkButtonToggle(): void {
    const movies = this.cartService.getMovie();
    if (movies) {
      const currentFilm = movies.find(item => item.id === this.poster.id);
      this.title = currentFilm ? 'Unfavourite' : 'Add to favourite';
      this.titleMobile = currentFilm ? '★' : '☆';
      this.required = !currentFilm;
    }
  }
}
