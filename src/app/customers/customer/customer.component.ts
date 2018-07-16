import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [CustomerService]
})
export class CustomerComponent implements OnInit {

  constructor(private customerService: CustomerService ) { }

  ngOnInit() {
      this.resetForm();
  }

  resetForm (form? : NgForm){
      if (form != null)
      form.reset();
      console.log("my reset button working");
    this.customerService.selectedCustomer = {
        FirstName : '',
        LastName : '',
        Position : '',
        Age : null,
        Categories : ''
    }
  }

}
