import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LoginComponent } from 'src/app/pages/login/login.component';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  signUpModalRef:BsModalRef = new BsModalRef()
  constructor(private modalService:BsModalService) { }

  ngOnInit(): void {
  }

  SignInModal(){
    this.signUpModalRef=this.modalService.show(LoginComponent,{class:'modal-sm'})
  }
}
