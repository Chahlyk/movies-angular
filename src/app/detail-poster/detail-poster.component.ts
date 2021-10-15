import { Component, OnInit } from '@angular/core';
import { PosterService } from "../posters/poster.service";
import { IPoster } from "../shared/interfaces";

@Component({
  selector: 'app-infos',
  templateUrl: './detail-poster.component.html',
  styleUrls: ['./detail-poster.component.css']
})
export class DetailPosterComponent implements OnInit {

  infos: IPoster[] = []

  constructor(private posterService: PosterService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    // this.posterService.getData()
    //   .subscribe(infos => {
    //     this.infos = infos.results
    //   })
  }

}
