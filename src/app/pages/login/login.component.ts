import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginData } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userName: any = '';
  password: any = '';
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toast: ToastrService // public signUpModalRef: BsModalRef
  ) {
    this.loginForm = this.formBuilder.group({
      userName: '',
      password: '',
    });
  }

  ngOnInit(): void {}

  signIn(formData: LoginData) {
    this.userName = localStorage.getItem('username')
      ? localStorage.getItem('username')
      : 'mbcet';
    this.password = localStorage.getItem('password')
      ? localStorage.getItem('password')
      : 'mbcet';
    // this.userName = formData.userName;
    // this.password = formData.password;
    console.log(formData);
    if (
      this.userName === formData.userName &&
      this.password === formData.password
    ) {
      this.router.navigate(['/home']);
      this.toast.success('Welcome ' + this.userName, 'Login Success!');
    } else if((formData.userName==="")||(formData.userName===null)&&(formData.password==="")||(formData.password===null)) {
      this.toast.error('Username or Password Cannot Be Empty', 'Login Failed!');
    }
    else{
      this.toast.error('Incorrect Username and Password', 'Login Failed!');
      
    }
  }
  // close() {
  //   this.signUpModalRef.hide();
  // }
}
