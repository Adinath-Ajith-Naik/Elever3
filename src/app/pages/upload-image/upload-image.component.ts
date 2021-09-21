import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Filter } from 'src/app/Models/Filters/filters.model';
import { Posts } from 'src/app/Models/posts/posts.model';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss'],
})
export class UploadImageComponent implements OnInit {
  categoryForm: FormGroup;
  uploadForm: FormGroup;
  filters: Filter[] | any = [] as Filter[];
  posts: Posts[] | any = [] as Posts[];
  fileSelected?: Blob;
  imgUrl?: string;
  base64: string = 'Base64...';

  constructor(
    private formBuilder: FormBuilder,
    private uploadModalRef: BsModalRef,
    private toast: ToastrService,
    private sanitizer: DomSanitizer
  ) {
    this.categoryForm = this.formBuilder.group({
      category: '',
    });
    this.uploadForm = this.formBuilder.group({
      image: '',
      username: '',
      location: '',
      caption: '',
      tag: '',
    });
    this.filters = localStorage.getItem('filters')
      ? JSON.parse(localStorage.getItem('filters')!)
      : [];
    this.posts = localStorage.getItem('posts')
      ? JSON.parse(localStorage.getItem('posts')!)
      : [];
  }

  ngOnInit(): void {}
  addCategory(values: any) {
    console.log(values);
    var cat: Filter = {
      name: values.category,
      selected: false,
    };
    this.filters.push(cat);
    localStorage.setItem('filters', JSON.stringify(this.filters));
    this.toast.success('Category Created', 'Success');
    this.uploadModalRef.hide();
  }
  addPost(values: any) {
    var post: Posts = {
      caption: values.caption,
      id: Math.floor(Math.random() * 1000 + 1),
      location: values.location,
      userName: values.username,
      tag: values.tag,
      imageUrl: values.image,
      liked: false,
      likes: 0,
    };
    this.posts.push(post);
    localStorage.setItem('posts',JSON.stringify(this.posts));
  }
}
