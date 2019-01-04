import { Component } from "@angular/core";

@Component({
  selector: 'twoway-binding',
  template: `<div>
                <h3>Two-way data Binding</h3>
                <input [(ngModel)]="myvar"
                  (focus)="setInputFocus()"
                  (focusout)="setInputFocusOut()" />
                <h3>{{displayMsg}}</h3>
                <h2>Text Message: {{myvar}}</h2>
            </div>`
})

export class TwoWayBinding {
  myvar:any = "Hello";
  displayMsg:string

  setInputFocus(){
    this.displayMsg = "I am being edited"
  }

  setInputFocusOut(){
    this.displayMsg = "";
  }
}
