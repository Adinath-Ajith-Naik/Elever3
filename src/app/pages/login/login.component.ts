import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
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
    private toast: ToastrService, // public signUpModalRef: BsModalRef
    private loginService: LoginService
  ) {
    localStorage.setItem('login', 'login');
    this.loginForm = this.formBuilder.group({
      userName: '',
      password: '',
    });
  }

  ngOnInit(): void {}

  signIn(formData: LoginData) {
    var login: boolean = this.loginService.logIn(formData);
    console.log(login);
    
  }
  // close() {
  //   this.signUpModalRef.hide();
  // }
}
