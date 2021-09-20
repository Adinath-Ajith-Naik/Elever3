import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Posts } from 'src/app/Models/posts/posts.model';

@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.component.html',
  styleUrls: ['./view-image.component.scss']
})
export class ViewImageComponent implements OnInit {
  post!:Posts
  
  constructor(
    private bsModalRef:BsModalRef
  ) { 

  }

  ngOnInit(): void {
    console.log(this.post);
    
  }
  hideModal(){
    this.bsModalRef.hide()
  }

}
