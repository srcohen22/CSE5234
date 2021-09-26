import { Component, OnInit } from '@angular/core';
import { CART } from '../cart-summary/mock-cart';

@Component({
  selector: 'app-final-summary',
  templateUrl: './final-summary.component.html',
  styleUrls: ['./final-summary.component.css']
})
export class FinalSummaryComponent implements OnInit {

  cart = CART;
  displayedColumns: string[] = ['image','name','quantity','price'];
  constructor() { }

  ngOnInit(): void {
  }

}
