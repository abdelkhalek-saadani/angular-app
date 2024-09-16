import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  buttonLabel!:String;
  faceSnap!: FaceSnap;
  isSnapped!: boolean;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute){}

  ngOnInit(): void {
    this.buttonLabel = "oh snap!!"
    this.isSnapped = false;
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onAddSnap() {
    const snappedText= "OOps snapped!";
    const notSnappedText= "oh snap!!";
    if (this.isSnapped == true) {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'unsnap');
      this.buttonLabel = notSnappedText;
      this.isSnapped = false;
    } else 
    {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'snap');
      this.buttonLabel = snappedText;
      this.isSnapped = true;
    }
  }

}
