import { NgModule } from "@angular/core";
import { WelcomeComponent } from './welcomeComponent';

@NgModule({
  declarations:[
    WelcomeComponent
  ],
  exports:[
    WelcomeComponent
  ]
})

export class WelcomeModule { }
