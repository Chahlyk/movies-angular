import { Component, OnInit } from '@angular/core';
import { PosterService } from "./poster.service";
import { IPoster } from "../shared/interfaces";

@Component({
  selector: 'app-posters',
  templateUrl: './posters.component.html',
  styleUrls: ['./posters.component.css']
})
export class PostersComponent implements OnInit {

  posters: IPoster[] = []

  constructor(private posterService: PosterService) {}

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.posterService.getData()
      .subscribe((posters) => {
        this.posters = posters.results
      })
  }
}
