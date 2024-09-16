import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {

    faceSnaps : FaceSnap[] = [{
        id: 0,
        title:"gala",
        createdDate:new Date(),
        description:"description mtaa snap gala",
        snaps:99,
        imageUrl:"https://www.gstatic.com/webp/gallery/5.webp",
        location: "beb bhar"
      },
      {
        id: 1,
        title:"snap ethenya",
        createdDate:new Date(),
        description:"description mtaa snap snap ethenya",
        snaps:0,
        imageUrl:"https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: 2,
        title:"snap etheltha",
        createdDate:new Date(),
        description:"description mtaa snap snap etheltha",
        snaps:6,
        imageUrl:"https://www.presse-citron.net/app/uploads/2020/07/Stockage-en-ligne.jpg"
      }];

    getAllFaceSnaps(): FaceSnap[] {
      return this.faceSnaps;
    }
    
    getFaceSnapById(id: number): FaceSnap {
      const found = this.faceSnaps.find((element) => element.id == id);
      if (found) {
        return found;
      } else {
        throw new Error('FaceSnap not found!');
      }
    }

    snapFaceSnapById(id: number, snapType: 'snap' | 'unsnap'): void{
      const faceSnap = this.getFaceSnapById(id);
      snapType === 'snap' ? faceSnap.snaps++: faceSnap.snaps--;
    }

}