import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  signUpModalRef: BsModalRef = new BsModalRef();
  logInStatus: string = '';
  login: string | null = 'false';
  userName: string | null = '';
  constructor(
    private modalService: BsModalService,
    private router: Router,
    private logInService: LoginService,
    private toast:ToastrService
  ) {
    router.events.subscribe((value: any) => {
      if (value instanceof NavigationStart) {
        this.userName = localStorage.getItem('username');
        this.login = this.logInService.getLogInDetails();
        this.logInStatus = value.url.substring(1, value.url.length);
      }
      // this.logInService.checkLogIn.subscribe
    });
  }

  ngOnInit(): void {}

  SignInModal() {
    this.signUpModalRef = this.modalService.show(LoginComponent, {
      class: 'modal-sm',
    });
  }
  logOut(){
    this.logInService.LogInStatus("false");
    this.router.navigate(['/sign-in']);
    this.toast.success("Logout Successful","Success")
  }
}
