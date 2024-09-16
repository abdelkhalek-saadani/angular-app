import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  @ViewChild('bottomSection') bottomSection!: ElementRef
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onContinue() {
    this.router.navigate([{ outlets: { postOutlet: ['posts'] } }]);
    setTimeout(() => {
      this.bottomSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }
  onAbout(){
    this.router.navigate([{ outlets: { postOutlet: ['about'] } }]);
    setTimeout(() => {
      this.bottomSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }
}
