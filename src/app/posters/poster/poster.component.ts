import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})

export class PosterComponent implements OnInit {
  @Input() public poster!: any;

  public tooltip: boolean = false;
  public linkForImage!: string;

  public ngOnInit(): void {
    this.linkForImage = this.poster?.poster_path ? `https://image.tmdb.org/t/p/w342${this.poster.poster_path}`
      : '../../../assets/priroda_kartinki_foto_03.jpg'
  }
}
