import { Component, OnInit } from '@angular/core';
import { Filter } from 'src/app/Models/Filters/filters.model';
import { Posts } from 'src/app/Models/posts/posts.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  posts: Posts[] = [] as Posts[];
  filters: Filter[] = [
    {
      name: 'Aesthetic',
      selected: false,
    },
    {
      name: 'Cats',
      selected: false,
    },
    {
      name: 'Nature',
      selected: false,
    },
    {
      name: 'Birds',
      selected: false,
    },
    {
      name: 'Flowers',
      selected: false,
    },
    {
      name: 'Modeling',
      selected: false,
    },
    {
      name: 'Minimal',
      selected: false,
    },
    {
      name: 'Abstract',
      selected: false,
    },
    {
      name: 'Food',
      selected: false,
    },
    {
      name: 'Candid',
      selected: false,
    },
  ];
  
  constructor(
    private logInService:LoginService
  ) { 
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
        tag: ['Flowers'],
        caption: 'thanos',
        likes: 10,
        liked: false,
      },
      {
        id: 4,
        userName: 'mbcet',
        imageUrl: '../../.../../../assets/images/image15.jfif',
        location: 'Banglore',
        tag: ['Cats'],
        caption: 'City ',
        likes: 10,
        liked: false,
      },
      {
        id: 5,
        userName: 'mbcet',
        imageUrl: '../../.../../../assets/images/image5.jfif',
        location: 'Haripad',
        tag: ['Nature'],
        caption: 'Highness',
        likes: 15,
        liked: false,
      },
      {
        id: 6,
        userName: 'mbcet',
        imageUrl: '../../.../../../assets/images/image8.jfif',
        location: 'Kottayam',
        tag: ['all'],
        caption: 'set ',
        likes: 10,
        liked: false,
      },
    ];
  }

  ngOnInit(): void {
    localStorage.setItem('username','user');
    localStorage.setItem('password','user');
    this.logInService.LogInStatus("false")
    localStorage.setItem('filters',JSON.stringify(this.filters));
    localStorage.setItem('posts',JSON.stringify(this.posts));

  }

}
