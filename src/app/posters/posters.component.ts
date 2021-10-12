import { Component, OnInit } from '@angular/core';
import { Poster, PosterService } from "./poster.service";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-posters',
  templateUrl: './posters.component.html',
  styleUrls: ['./posters.component.css']
})
export class PostersComponent implements OnInit {

  posters: Poster[] = []

  constructor(private posterService: PosterService) {}

  ngOnInit(): void {
    this.fetchAPI()
  }

  fetchAPI() {
    this.posterService.fetchAPI()
      .pipe(map((data: any) => data.results))
      .subscribe(posters => {
        this.posters = posters
        console.log('Response', posters)
      })
  }
}
