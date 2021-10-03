import { Component, OnInit } from '@angular/core';
import { AboutUs } from './aboutus';
import { PROFILE } from './profiles'

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  profile = PROFILE;

  constructor() { }

  ngOnInit(): void {
  }

}
