import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'transitions';
  isAtHome = true

  // constructor(private Location: Location) {
  //   console.log(this.Location.path())
  //   this.isAtHome = this.Location.path() === ""
  // }
  constructor() {
    console.log(window.location.pathname)
    this.isAtHome = window.location.pathname === '/'
  }

  ngOnInit() {

  }

  changeOfRoutes(number: number) {
    console.log(number)
    this.isAtHome = number === 0
    console.log(this.isAtHome)
    // console.log(window.location.pathname || 'none')
  }
}

