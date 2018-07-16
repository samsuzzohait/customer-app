import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
// import 'rxjs/add/operator/map';

@Injectable()

export class CustomerService {
  constructor( private http : Http ) {}

    postCustomer(data) {
      const headers = new Headers();
      // headers.append('Authorization', 'Bearer' + this.getToken()); // this will need for token authintication but not now
      const options = new RequestOptions({ headers: headers });

      const uri = 'example.com/api/post';
      return this.http.post(uri, data, options);
    }


}
