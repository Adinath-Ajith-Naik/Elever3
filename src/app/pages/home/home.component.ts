import { Component, OnInit } from '@angular/core';
import { Filter } from 'src/app/Models/Filters/filters.model';
import { Posts } from 'src/app/Models/posts/posts.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  posts: Posts[] = [] as Posts[];
  post: Posts = {} as Posts;
  liked: boolean = false;
  toggler: boolean = false;
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
  selectedFilter: string[] = [];

  constructor() {
    // this.post = {
    //   userName: 'amalmohann',
    //   imageUrl: '../../.../../../assets/images/image1.jfif',
    //   location: 'Kozhikode',
    //   tag: ['all'],
    //   caption: 'wild and free',
    //   likes: 10,
    //   liked:false
    // };

    this.posts = [
      {
        id: 1,
        userName: 'amalmohann',
        imageUrl: '../../.../../../assets/images/image1.jfif',
        location: 'Kozhikode',
        tag: ['all'],
        caption: 'wild and free',
        likes: 10,
        liked: false,
      },
      {
        id: 2,
        userName: 'adinath',
        imageUrl: '../../.../../../assets/images/image2.jfif',
        location: 'Kozhikode',
        tag: ['all'],
        caption: 'live free',
        likes: 10,
        liked: false,
      },
      {
        id: 3,
        userName: 'akhil',
        imageUrl: '../../.../../../assets/images/image10.jfif',
        location: 'Kozhikode',
        tag: ['all'],
        caption: 'thanos',
        likes: 10,
        liked: false,
      },
      {
        id: 4,
        userName: 'adarsh',
        imageUrl: '../../.../../../assets/images/image15.jfif',
        location: 'Banglore',
        tag: ['all'],
        caption: 'City ',
        likes: 10,
        liked: false,
      },
      {
        id: 5,
        userName: 'Sarath',
        imageUrl: '../../.../../../assets/images/image5.jfif',
        location: 'Haripad',
        tag: ['all'],
        caption: 'Highness',
        likes: 15,
        liked: false,
      },
      {
        id: 6,
        userName: 'Albin',
        imageUrl: '../../.../../../assets/images/image8.jfif',
        location: 'Kottayam',
        tag: ['all'],
        caption: 'set ',
        likes: 10,
        liked: false,
      },
    ];
  }

  ngOnInit(): void {}
  liker(id: number) {
    this.liked = !this.liked;
    this.posts.forEach((post) => {
      if (post.id == id) {
        post.liked = !post.liked;
      }
    });
  }

  toggleFilters() {
    this.toggler = !this.toggler;
  }

  selectFilter(filter: Filter) {
    filter.selected = !filter.selected;
  }
}
