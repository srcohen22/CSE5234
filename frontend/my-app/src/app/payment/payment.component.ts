import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  subtotal = this.cartService.subtotal

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
