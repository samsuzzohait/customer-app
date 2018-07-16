import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';

// componetns
import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomerComponent } from "./components/customers/customer/customer.component";
import { CustomerListComponent } from './components/customers/customer-list/customer-list.component';

// services
import { CustomerService } from './service/customer.service';


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
