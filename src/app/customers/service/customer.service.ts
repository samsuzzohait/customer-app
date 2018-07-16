import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  selectedCustomer : Customer;
  constructor( private http : Http ) {}


    // postCustomer(cus: Customer) {
    //     var body = JSON.stringify(cus);
    //     var headerOptions = new Headers({ 'Content-Type' : 'application/json' });
    //     var requestOptions = new RequestOptions({method : RequestMethod.Post, headers: headerOptions});

    //     this.http.post( url, body, requestOptions);
    // }


}
