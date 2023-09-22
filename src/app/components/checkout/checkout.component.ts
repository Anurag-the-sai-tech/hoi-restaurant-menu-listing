import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  totalAmount: any = 0;
  ngOnInit() {
    this.totalAmount = localStorage.getItem('totalAmount');
  }
}
