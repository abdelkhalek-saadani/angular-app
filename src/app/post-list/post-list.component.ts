import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/post.service';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss'],
    standalone: false
})
export class PostListComponent implements OnInit {
  posts$!: Observable<Post[]>;
  searchTerm = '';

  constructor(private postsService: PostsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.posts$ = this.postsService.getPosts();
  }

  getDateDifference(postDate: Date): string {
    const now = new Date();
    const diff = now.getTime() - new Date(postDate).getTime();
    const yearsDiff = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const monthsDiff = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    const daysDiff = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hoursDiff = Math.floor(diff / (1000 * 60 * 60));
    const minutesDiff = Math.floor(diff / (1000 * 60));
    if (yearsDiff >= 1) return yearsDiff + ' years';
    else if (monthsDiff >= 1) return monthsDiff + ' months';
    else if (daysDiff >= 1) return daysDiff + ' days';
    else if (hoursDiff >= 1) return hoursDiff + ' hours';
    else if (minutesDiff >= 1) return minutesDiff + ' minutes';
    else return 'seconds';
  }

  navigateToPost(id : number){
    console.log(id);
    this.router.navigate([{ outlets: { postOutlet: ['post',id] } }]);
  }
  
  onSearchInputChange(searchTerm: string): void {
    this.posts$ = this.postsService.getPosts().pipe(
      map((posts) =>
        posts.filter(
          (post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.body.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );
  }
}
