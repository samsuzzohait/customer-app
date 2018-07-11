import { Injectable } from '@angular/core';

import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  selectedCustomer : Customer;
  constructor() { }
}
