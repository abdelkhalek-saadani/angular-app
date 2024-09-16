import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss'],
})
export class FaceSnapListComponent implements OnInit {
  mySnaps!: FaceSnap[];
  posts!: Post[];

  constructor(
    private faceSnapsService: FaceSnapsService
  ) {}

  getRandomDate(): Date {
    const start = new Date(2020, 0, 1).getTime();
    const end = new Date().getTime();
    return new Date(start + Math.random() * (end - start));
  }

  

  sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async ngOnInit(): Promise<void> {
    this.mySnaps = this.faceSnapsService.getAllFaceSnaps();
    console.log("testing the sleep function");
    await this.sleep(3000);
    console.log("done sleeping");
    
  }
}
