import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Filter } from 'src/app/Models/Filters/filters.model';
import { Posts } from 'src/app/Models/posts/posts.model';
import { LoginService } from 'src/app/services/login.service';
import { UploadImageComponent } from '../upload-image/upload-image.component';
import { ViewImageComponent } from '../view-image/view-image.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  username: string | null = '';
  posts: Posts[] = [] as Posts[];
  bsModalRef!:BsModalRef;
  uploadModalRef!:BsModalRef;
  filters: Filter[] | any = [] as Filter[];
  

  constructor(
  private bsModalService:BsModalService,
  private logInService:LoginService,
  private router:Router,
  private toast:ToastrService

  ) {
    this.username = localStorage.getItem('username')? localStorage.getItem('username'): null;
      this.filters = localStorage.getItem('filters')? JSON.parse(localStorage.getItem('filters')!): [];
    this.posts=localStorage.getItem('posts')?JSON.parse(localStorage.getItem('posts')!):[];

  }

  ngOnInit(): void {}
  showImg(post:Posts){
    var initialState={
      post:post
    }
    this.bsModalRef=this.bsModalService.show(ViewImageComponent,{initialState});
  }
  uploadImg(){
    this.uploadModalRef=this.bsModalService.show(UploadImageComponent);
  }
  logOut(){
    this.logInService.LogInStatus("false");
    this.router.navigate(['/sign-in']);
    this.toast.success("Logout Successful","Success")
  }
  deleteFilter(index:number){
    this.filters.splice(index,1);
    localStorage.setItem('filters',JSON.stringify(this.filters));
  }
  
}
