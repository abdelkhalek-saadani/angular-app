import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private postsSubject = new BehaviorSubject<Post[]>([]);
  posts$ = this.postsSubject.asObservable();

  constructor(private http: HttpClient) {}

  getPosts(): void {
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        tap(posts => this.postsSubject.next(posts.map(post => ({
          ...post,
          date: this.getRandomDate()
        }))))
      )
      .subscribe();
  }

  private getRandomDate(): Date {
    const start = new Date(2020, 0, 1).getTime();
    const end = new Date().getTime();
    return new Date(start + Math.random() * (end - start));
  }
}
