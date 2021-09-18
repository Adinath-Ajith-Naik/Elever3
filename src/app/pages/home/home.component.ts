import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/Models/posts/posts.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  posts: Posts[] = [] as Posts[];
  post: Posts = {} as Posts;
  constructor() {
    this.post = {
      userName: 'amalmohann',
      imageUrl: '../../.../../../assets/images/image1.jfif',
      location: 'Kozhikode',
      tag: ['all'],
      caption: 'wild and free',
      likes: 10,
    };

    this.posts =[
      {
        userName: 'amalmohann',
        imageUrl: '../../.../../../assets/images/image1.jfif',
        location: 'Kozhikode',
        tag: ['all'],
        caption: 'wild and free',
        likes: 10,
      },
      {
        userName: 'adinath',
        imageUrl: '../../.../../../assets/images/image2.jfif',
        location: 'Kozhikode',
        tag: ['all'],
        caption: 'live free',
        likes: 10,
      },
      {
        userName: 'akhil',
        imageUrl: '../../.../../../assets/images/image10.jfif',
        location: 'Kozhikode',
        tag: ['all'],
        caption: 'thanos',
        likes: 10,
      }
    ]
  }

  ngOnInit(): void {}
}
