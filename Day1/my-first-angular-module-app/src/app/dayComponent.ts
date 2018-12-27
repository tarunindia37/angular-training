import { Component } from "@angular/core";

@Component({
  selector: 'DayComponent',
  template: `
      <div><h2>Today is {{ current_day }}</h2></div>
  `
})

export class DayComponent {
  current_day = new Date().toLocaleDateString();
}
