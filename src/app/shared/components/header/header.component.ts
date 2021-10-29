import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public linkOfMoon: string = 'https://raw.githubusercontent.com/Chahlyk/smth/movies/movies/pictures/moon-clip-art-38.png';
  public button: boolean = true;
}
