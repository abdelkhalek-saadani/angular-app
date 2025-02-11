import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-face-snap',
    templateUrl: './face-snap.component.html',
    styleUrls: ['./face-snap.component.scss'],
    standalone: false
})
export class FaceSnapComponent implements OnInit {
  buttonLabel!: String;
  isSnapped!: boolean;
  @Input() faceSnap!: FaceSnap;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buttonLabel = 'oh snap!!';
    this.isSnapped = false;
  }

  onAddSnap() {
    const snappedText = 'OOps snapped!';
    const notSnappedText = 'oh snap!!';
    if (this.isSnapped == true) {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonLabel = notSnappedText;
      this.isSnapped = false;
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonLabel = snappedText;
      this.isSnapped = true;
    }
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
