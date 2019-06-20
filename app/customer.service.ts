import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http' ;
import { Customer } from './customer';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:4200/customer-/';

  createUser(customer: Customer): Observable {
    return this.http.post<CustomerResponse>(this.baseUrl, customer);
  }

  updateUser(customer: Customer): Observable<ApiResponse> {
    return this.http.put<Cus
    (this.baseUrl + user.id, customer);
  }



}
