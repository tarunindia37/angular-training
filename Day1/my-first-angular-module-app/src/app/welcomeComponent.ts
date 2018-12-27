import { Component } from "@angular/core";

@Component({
  selector: 'WelcomeComponent',
  template: `
      <div><h2>Welcome to {{training_name}}</h2></div>
  `
})

export class WelcomeComponent {
  training_name = 'Angular 7 Training';
}
