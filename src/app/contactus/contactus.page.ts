import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.page.html',
  styleUrls: ['./contactus.page.scss'],
})
export class ContactusPage implements OnInit {
  isFormSubmitted = false;
  fullName: string;
  email: string;
  phoneNumber: number;
  gender: string;
  currentDate: string;
  message: string;
  constructor() { }

  ngOnInit() { }
  submitForm(myForm) {
    this.isFormSubmitted = true;
    this.fullName = myForm.fullName;
    this.email = myForm.email;
    this.phoneNumber = myForm.phoneNumber;
    this.gender = myForm.gender;
    this.currentDate = myForm.currentDate;
    this.message = myForm.message;
  }
}
