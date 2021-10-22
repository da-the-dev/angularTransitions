import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'transitions';
  isAtHome = true

  constructor() {
    console.log(window.location.pathname)
    this.isAtHome = window.location.pathname === '/'
  }

  changeOfRoutes(number: number) {
    this.isAtHome = number === 0
    // console.log(number)
    // console.log(this.isAtHome)
  }
}

