import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LoginData } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userName: string = '';
  password: string = '';
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public signUpModalRef: BsModalRef
  ) {
    this.loginForm = this.formBuilder.group({
      userName: '',
      password: '',
    });
  }

  ngOnInit(): void {}

  signIn(formData: LoginData) {
    this.userName = formData.userName;
    this.password = formData.password;
    console.log(formData);
  }
  close() {
    this.signUpModalRef.hide();
  }
}
