import { NgModule } from "@angular/core";
import { HelloComponent } from './helloComponent';

@NgModule({
  declarations: [
    HelloComponent
  ],
  exports:[
    HelloComponent
  ]
})

export class HelloModule { }
