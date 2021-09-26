import { Component, OnInit } from '@angular/core';
import { CART } from './mock-cart';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class SummaryComponent implements OnInit {

  cart = CART;
  displayedColumns: string[] = ['image','name','quantity','price', 'edit'];

  // constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
