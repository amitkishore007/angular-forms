import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  @ViewChild('signupForm') signupForm: NgForm;

  user = {
      name: '',
      email: '',
      secret: '' 
  };
  
  formSubmitted:boolean = false;

  defaultName: string = 'amitkishore';

  onSubmit() {
    this.user.name = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secret = this.signupForm.value.secret;
    this.formSubmitted = true;
    console.log(this.signupForm);
  }

  onSuggestUsername() {
    //setvalue() require to set the value for the whole form inputs
    // this.signupForm.setValue({
    //   userData: {
    //     username: 'Akm@123',
    //     email: 'kishoreamit5@gmail.com'
    //   },
    //   secret: 'pet'
    // });


    //to set value for specific input user
    // form.patchvalue()

    this.signupForm.form.patchValue({
      userData:  {
        username: 'Amitkishore007'
      }
    });
    
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    console.log(this.signupForm);
  }

  onResetForm() {
    this.formSubmitted = false;
    this.signupForm.reset();
  }


}
