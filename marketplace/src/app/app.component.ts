import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'pm-root',
  template: `
    <div>
      <h1>{{pageTitle}}</h1>
      <div>My first app component</div>
    </div>
  `
})

export class AppComponent {
  pageTitle = 'Shola Product Management';
}
