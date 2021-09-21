import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  userName: any = '';
  password: any = '';
  loginDetails: string|null="";
  constructor(private router: Router, private toast: ToastrService) {
  }

  logIn(values: any) {
    this.userName = localStorage.getItem('username')
      ? localStorage.getItem('username')
      : 'mbcet';
    this.password = localStorage.getItem('password')
      ? localStorage.getItem('password')
      : 'mbcet';
    // this.userName = formData.userName;
    // this.password = formData.password;
    console.log(values);
    if ('mbcet' === values.userName && 'mbcet' === values.password) {
      localStorage.setItem('username','mbcet');
      this.toast.success('Welcome ' + this.userName, 'Login Success!');
      this.LogInStatus("true");
      this.router.navigate(['/my-account']);
      return true;
    } else if (
      this.userName === values.userName &&
      this.password === values.password
    ) {
      localStorage.setItem('username','user');
      this.toast.success('Welcome ' + this.userName, 'Login Success!');
      this.LogInStatus("true");
      this.router.navigate(['/home']);
      return true;
    } else if (
      values.userName === '' ||
      (values.userName === null && values.password === '') ||
      values.password === null
    ) {
      this.toast.error('Username or Password Cannot Be Empty', 'Login Failed!');
      this.LogInStatus("false");
      return false;
    } else {
      this.toast.error('Incorrect Username and Password', 'Login Failed!');
      this.LogInStatus("false");
      return false;
    }
  }

  LogInStatus(value:string) {
    localStorage.setItem('login',value);
  }

  getLogInDetails():string|null{
     this.loginDetails=localStorage.getItem('login');
     return this.loginDetails;
  }
}
