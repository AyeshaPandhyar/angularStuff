import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms' ;
import {Router} from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {
  name = 'AYesha' ;

  addForm: FormGroup ;

  constructor(private formBuilder: FormBuilder, private router: Router, private customerService: CustomerService ) { }

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
      number: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      zipcode: ['', Validators.required],
      country: ['', Validators.required],
    });
  }

}
