import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CustomerService } from '../customer.service';
import { PaymentInfo } from './payInfo';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  subtotal = this.cartService.subtotal
  payment = <PaymentInfo> {}

  constructor(private cartService: CartService, private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.refillPayment()
  }

  // fill payment text boxes with current payment
  // will be blank if user's first payment, otherwise will fill 
  refillPayment(){
    this.payment = this.customerService.getPayment()
  }

  submitPayment(first: string, last: string, card_num: string){
    this.payment.first_name = first 
    this.payment.last_name = last
    if(card_num.length > 3){
      this.payment.last_four = parseInt(card_num.substring(card_num.length-4,card_num.length))
    }
    this.customerService.addPayment(this.payment)
  }

}
