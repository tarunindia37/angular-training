import { Component } from "@angular/core";

@Component({
  selector: 'HelloComponent',
  template: `
    <div><h2>Hello, {{myName}}</h2></div>
  `
})

export class HelloComponent {
  myName:string = "Tarun Kesarwani";
}
