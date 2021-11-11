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
  public page!: number;
  public totalItems!: number;
  // private totalPages!: number;
  // public  data!: any;

  public constructor(private posterService: PosterService) {}

  public ngOnInit(): void {
    this.getData(1);
  }

  // public first(): void {
  //   this.posterService.getData(1)
  //     .subscribe((posters: IData) => {
  //       this.posters = posters.results;
  //       this.page = posters.page;
  //     })
  // }
  //
  // public prev(): void {
  //   this.posterService.getData(this.page - 1)
  //     .subscribe((posters: IData) => {
  //       this.posters = posters.results;
  //       this.page = posters.page;
  //     })
  // }
  //
  // public innerFirst(): void {
  //   this.posterService.getData(this.page)
  //     .subscribe((posters: IData) => {
  //       this.posters = posters.results;
  //       this.page = posters.page;
  //     })
  // }
  //
  // public innerSecond(): void {
  //   this.posterService.getData(this.page + 1)
  //     .subscribe((posters: IData) => {
  //       this.posters = posters.results;
  //     })
  // }
  //
  // public innerThird(): void {
  //   this.posterService.getData(this.page + 2)
  //     .subscribe((posters: IData) => {
  //       this.posters = posters.results;
  //     })
  // }
  //
  // public next(): void {
  //   this.posterService.getData(this.page + 1)
  //     .subscribe((posters: IData) => {
  //       this.posters = posters.results;
  //       this.page = posters.page;
  //     })
  // }
  //
  // public last(): void {
  //   this.posterService.getData(this.totalPages)
  //     .subscribe((posters: IData) => {
  //       this.posters = posters.results;
  //       this.page = posters.page;
  //     })
  // }

  private getData(page: number): void {
    this.posterService.getData(this.page)
      .subscribe((posters: IData) => {
        this.posters = posters.results;
        this.page = posters.page;
        this.totalItems = posters.total_results;
        // this.totalPages = posters.total_pages
      })
  }
}
