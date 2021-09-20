import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userName: any = '';
  password: any = '';
  constructor(
    private router: Router,
    private toast: ToastrService,
  ) { }

  logIn(values:any){
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
      this.router.navigate(['/my-account']);
      this.toast.success('Welcome ' + this.userName, 'Login Success!');
      localStorage.setItem('login', 'true');
      return true
    } else if (
      this.userName === values.userName &&
      this.password === values.password
    ) {
      this.router.navigate(['/home']);
      this.toast.success('Welcome ' + this.userName, 'Login Success!');
      return true
    } else if (
      values.userName === '' ||
      (values.userName === null && values.password === '') ||
      values.password === null
    ) {
      this.toast.error('Username or Password Cannot Be Empty', 'Login Failed!');
      return false
    } else {
      this.toast.error('Incorrect Username and Password', 'Login Failed!');
      return false

    }
  }
}
