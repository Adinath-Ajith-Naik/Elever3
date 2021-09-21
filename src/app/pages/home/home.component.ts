import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Filter } from 'src/app/Models/Filters/filters.model';
import { Posts } from 'src/app/Models/posts/posts.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loginStatus: string | null = '';
  posts: Posts[] = [] as Posts[];
  selectedPosts: Posts[] = [] as Posts[];
  post: Posts = {} as Posts;
  liked: boolean = false;
  toggler: boolean = false;
  filters: Filter[] | any = [] as Filter[];
  selectedFilter: string[] = [];

  constructor(private logInService: LoginService) {
    this.filters = localStorage.getItem('filters')? JSON.parse(localStorage.getItem('filters')!): [];
    this.posts=localStorage.getItem('posts')?JSON.parse(localStorage.getItem('posts')!):[];
  }

  ngOnInit(): void {
    this.loginStatus = this.logInService.getLogInDetails();
    this.selectedPosts = this.posts;
  }
  liker(id: number) {
    this.liked = !this.liked;
    this.posts.forEach((post) => {
      if (post.id == id) {
        post.liked = !post.liked;
        if (post.liked == true) {
          post.likes += 1;
        } else {
          post.likes -= 1;
        }
      }
    });
    localStorage.setItem('posts',JSON.stringify(this.posts));

  }

  toggleFilters() {
    this.toggler = !this.toggler;
  }

  selectFilter(filter: Filter) {
    filter.selected = !filter.selected;
    if (!filter.selected) {
      this.selectedFilter.splice(this.selectedFilter.indexOf(filter.name), 1);
    } else {
      this.selectedFilter.push(filter.name);
    }

    if (
      this.selectedFilter.length < 1 ||
      !this.selectedFilter.length ||
      !this.selectedFilter
    ) {
      this.selectedPosts = this.posts;
    } else {
      this.selectedPosts = [];
      this.posts.map((post) => {
        if (this.selectedFilter.includes(post.tag[0])) {
          var tempPost: Posts = post;
          this.selectedPosts.push(tempPost);
          console.log();
        }
      });
    }
  }
}
