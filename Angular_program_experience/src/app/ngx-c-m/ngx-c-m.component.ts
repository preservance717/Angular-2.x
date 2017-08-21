import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {ContextMenuService, ContextMenuComponent} from 'ngx-contextmenu';

@Component({
  selector: 'app-ngx-c-m',
  templateUrl: './ngx-c-m.component.html',
  styleUrls: ['./ngx-c-m.component.css']
})
export class NgxCMComponent {
  public items = [
    {name: 'John', otherProperty: 'Foo'},
    {name: 'Joe', otherProperty: 'Bar'}
  ];

  public showMessage(message: string): void {
    console.log(message);
  }
}
