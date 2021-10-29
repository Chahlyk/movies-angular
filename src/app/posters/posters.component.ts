import { Component, OnInit } from '@angular/core';
import { IData, IPoster } from '../shared/interfaces';
import { PosterService } from '../shared/services/poster.service';

@Component({
  selector: 'app-posters',
  templateUrl: './posters.component.html',
  styleUrls: ['./posters.component.css']
})
export class PostersComponent implements OnInit {
  public posters: IPoster[] = [];

  public constructor(private posterService: PosterService) {}

  public ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    this.posterService.getData()
      .subscribe((posters: IData) => {
        this.posters = posters.results;
      })
  }
}
