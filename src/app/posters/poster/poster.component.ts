import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})

export class PosterComponent {
  @Input() public poster!: any;

  public tooltip: boolean = false;
  public linkForImage: string = 'https://image.tmdb.org/t/p/w342';
}
