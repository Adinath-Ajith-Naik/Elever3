import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/Models/posts/posts.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  username: string | null = '';
  posts: Posts[] = [] as Posts[];
  constructor() {
    this.username = localStorage.getItem('username')
      ? localStorage.getItem('username')
      : null;
    this.posts = [
      {
        id: 1,
        userName: 'mbcet',
        imageUrl: '../../.../../../assets/images/image1.jfif',
        location: 'Kozhikode',
        tag: ['all'],
        caption: 'wild and free',
        likes: 10,
        liked: false,
      },
      {
        id: 2,
        userName: 'mbcet',
        imageUrl: '../../.../../../assets/images/image2.jfif',
        location: 'Kozhikode',
        tag: ['all'],
        caption: 'live free',
        likes: 10,
        liked: false,
      },
      {
        id: 3,
        userName: 'mbcet',
        imageUrl: '../../.../../../assets/images/image10.jfif',
        location: 'Kozhikode',
        tag: ['all'],
        caption: 'thanos',
        likes: 10,
        liked: false,
      },
      {
        id: 4,
        userName: 'mbcet',
        imageUrl: '../../.../../../assets/images/image15.jfif',
        location: 'Banglore',
        tag: ['all'],
        caption: 'City ',
        likes: 10,
        liked: false,
      },
      {
        id: 5,
        userName: 'mbcet',
        imageUrl: '../../.../../../assets/images/image5.jfif',
        location: 'Haripad',
        tag: ['all'],
        caption: 'Highness',
        likes: 15,
        liked: false,
      },
    ];
  }

  ngOnInit(): void {}
}
