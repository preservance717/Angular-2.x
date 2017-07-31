import { Component } from '@angular/core';

@Component({
  selector:'ngx-switch',
  templateUrl:'./switch.component.html'
})

export class SwitchComponent{
  myVar: string = '';
  option: string = 'people';

  constructor(){
    this.myVar = "A"
  }

  getPeople(){
    this.option = 'people`';
    return false;
  }


  getProject(){
    this.option = 'project';
    return false;
  }

  getCompany(){
    this.option = 'company';
    return false;
  }
}
