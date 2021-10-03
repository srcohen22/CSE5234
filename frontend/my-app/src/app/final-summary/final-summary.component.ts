import { Component, OnInit } from '@angular/core';
import { Foods } from '../food-list/foods'
import { CartService } from '../cart.service';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-final-summary',
  templateUrl: './final-summary.component.html',
  styleUrls: ['./final-summary.component.css']
})
export class FinalSummaryComponent implements OnInit {
  subtotal = 0
  items = this.cartService.getItems();
  displayedColumns: string[] = ['image','name','quantity','price'];
  paymentInfo = this.customerService.getPayment();
  shippingInfo = this.customerService.getShipping();

  constructor(private cartService: CartService, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.subtotal = this.cartService.subtotal
  }

  ngAfterViewInit(): void {
    this.subtotal = this.cartService.subtotal
    this.paymentInfo = this.customerService.getPayment();
    this.shippingInfo = this.customerService.getShipping();
  }


}
