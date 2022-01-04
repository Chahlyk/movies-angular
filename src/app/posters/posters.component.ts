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
  public page: number = 1;
  public totalItems!: number;

  public constructor(private posterService: PosterService) {}

  public ngOnInit(): void {
    this.getData();
  }

  public pageChanged($event: number): void {
    this.page = $event
    this.getData( );
  }

  private getData(): void {
    this.posterService.getData(this.page)
      .subscribe((posters: IData) => {
        this.posters = posters.results;
        this.page = posters.page;
        this.totalItems = posters.total_results;
      })
  }
}
