import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/post.service';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
    standalone: false
})
export class PostComponent {
  
  goBack(){
    window.history.back();
  }
}
