import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'transitions';
  isAtHome: boolean

  constructor(private Location: Location) {
    console.log(this.Location.path())
    this.isAtHome = this.Location.path() === ""
  }
}

