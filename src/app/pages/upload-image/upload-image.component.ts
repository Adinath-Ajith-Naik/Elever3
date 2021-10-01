import { getUrlScheme } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/storage';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  imageUrl: string = '';
  imageNotUploading: boolean = true;
  firebaseImageUrl: string = '';
  task?: AngularFireUploadTask;

  constructor(
    private formBuilder: FormBuilder,
    private uploadModalRef: BsModalRef,
    private toast: ToastrService,
    private fireStorage: AngularFireStorage
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

  async addPost(values: any) {
    this.imageNotUploading = true;
    if (this.imageUrl && this.imageUrl !== '') {
      this.task = this.fireStorage.upload(
        (
          this.posts.length +
          1 +
          Math.floor(Math.random() * 100 + 1)
        ).toString(),
        this.imageUrl
      );
      const ref = this.fireStorage.ref(
        (this.posts.length + 1 + Math.floor(Math.random() * 100 + 1)).toString()
      );
      await this.task;
      this.firebaseImageUrl = await ref.getDownloadURL().toPromise();
    } else {
      alert('Please Add Image');
    }
    var post: Posts = {
      caption: values.caption,
      id: this.posts.length + 1,
      location: values.location,
      userName: values.username,
      tag: values.tag,
      imageUrl: this.firebaseImageUrl,
      liked: false,
      likes: 0,
    };
    console.log(post);
    this.posts.push(post);
    localStorage.setItem('posts', JSON.stringify(this.posts));
    this.uploadModalRef.hide();
    this.imageNotUploading = false;
  }

  uploadImage($event: any) {
    this.imageUrl = $event.target.files[0];
  }
}
