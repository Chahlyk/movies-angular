import { Component, OnInit } from '@angular/core';
import { IData, IPoster } from "../shared/interfaces";
import { PosterService } from "../poster.service";

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
      .subscribe((posters: IData) => {
        this.posters = posters.results
      })
  }
}
