import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  genders = ['male', 'female'];

  notAllowedEmail = ['test@gmail.com','test@yahoo.com'];
  signupForm: FormGroup;


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.signupForm = new FormGroup({
      'username': new FormControl(null,Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email, this.isEmailNotAllowed.bind(this)]),
      'gender': new FormControl(null,[Validators.required])
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  isEmailNotAllowed(control: FormControl) : {[s:string]: boolean} {
    if (this.notAllowedEmail.indexOf(control.value) != -1) {
      return {'notAllowedEmail':true};
    } 
    return null;
  }
}
