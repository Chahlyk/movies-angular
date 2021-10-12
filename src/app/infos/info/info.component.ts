import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() public info!: any

  linkForImage: string = 'https://image.tmdb.org/t/p/w342'

  constructor() { }

  ngOnInit(): void {
  }

}
