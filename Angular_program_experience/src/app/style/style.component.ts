/**
 * Created by gaole on 2017/8/17.
 */
import {Component} from '@angular/core';

@Component({
  selector: 'style-test',
  template: `<div class="ui input">
  <input type="text" name="color" value="{{color}}" #colorinput>
</div>
<div class="ui input">
  <input type="text" name="fontSize" value="{{fontSize}}" #fontinput>
</div>

<button class="ui primary button" (click)="apply(colorinput.value, fontinput.value)">
  Apply Setting
</button>

<div>
  <span [ngStyle]="{color:'red'}" [style.font-size.px]="fontSize">
    red text
  </span>
  <span [ngStyle]="{color:color}">
    {{color}} text
  </span>
  <span [style.background-color]="color" style="color:white">
    {{color}} background
  </span>
</div>`
})
export class StyleComponent {
  color: string;
  fontSize: number;

  apply(color: string, fontSize: number) {
    this.color = color;
    this.fontSize = fontSize;
  }
}
