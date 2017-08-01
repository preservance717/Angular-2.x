import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color: string;
  fontSize: number;

  apply(color: string, fontSize: number) {
    this.color = color;
    this.fontSize = fontSize;
  }
}
