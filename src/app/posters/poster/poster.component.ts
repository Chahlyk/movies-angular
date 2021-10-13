import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})

export class PosterComponent implements OnInit {
  @Input() public poster!: any;


  tooltip: boolean = false

  linkForImage: string = 'https://image.tmdb.org/t/p/w342'

  constructor() { }

  ngOnInit(): void {
  }

}
