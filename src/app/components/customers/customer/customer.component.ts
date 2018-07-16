import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Customer }    from './customer';
import { CustomerService } from '../../../service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [CustomerService]
})
export class CustomerComponent implements OnInit {
  model = new Customer('First Name');

  constructor(private customerService: CustomerService ) { }

  ngOnInit() {

  }

  onSubmit(data) {
    console.log(data);
    this.customerService.postCustomer(data).subscribe((res) => {
      alert('successfully data posted');
    });
  }

}
