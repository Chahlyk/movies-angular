import { Component, OnInit } from '@angular/core';
import { PosterService } from "../poster.service";
import { IPoster } from "../shared/interfaces";
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-infos',
  templateUrl: './detail-poster.component.html',
  styleUrls: ['./detail-poster.component.css']
})
export class DetailPosterComponent implements OnInit {

  poster: IPoster[] | undefined;
  linkForImage: string = 'https://image.tmdb.org/t/p/w342';

  constructor(
    private route: ActivatedRoute,
    private posterService: PosterService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPoster()
  }

  getPoster(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.posterService.getPoster(id)
      .subscribe(poster => this.poster = poster);
  }

  goBack(): void {
    this.location.back();
  }

}
