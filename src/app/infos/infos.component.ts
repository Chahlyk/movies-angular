import { Component, OnInit } from '@angular/core';
import { Poster, PosterService } from "../posters/poster.service";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {

  infos: Poster[] = []

  constructor(private posterService: PosterService) { }

  ngOnInit(): void {
    this.fetchAPI()
  }

  fetchAPI() {
    this.posterService.fetchAPI()
      .pipe(map((data: any) => data.results))
      .subscribe(infos => {
        this.infos = infos
        console.log('Response', infos)
      })
  }

}
