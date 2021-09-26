import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { Foods } from './foods';
import { FOOD } from './mock-foods'

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  food = FOOD;

  constructor() { }

  ngOnInit(): void {
  }

}
