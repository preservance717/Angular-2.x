/**
 * Created by gaole on 2017/9/5.
 */
import {Component, ReflectiveInjector} from "@angular/core";

export class MyService{
  getValue():string{
    return 'a value'
  }
}

export class ParamService{
  constructor(private phrase:string){
    console.log("ParamService is being created with phrase", phrase);
  }

  getValue():string{
    return this.phrase;
  }
}

@Component({
  selector:'app-injector',
  templateUrl:'./injector.component.html',
})

export class AppInjectorComponent{
  myService0:MyService;
  constructor(private myService:MyService,private parmaService:ParamService){
    console.log(this.myService);
    let injector: any = ReflectiveInjector.resolveAndCreate([MyService]);
    this.myService0 = injector.get(MyService);
    console.log('same instance?',this.myService0 === this.myService)
  }

  invokeService():void{
    console.log("MyService returned", this.myService.getValue());
  }
}
