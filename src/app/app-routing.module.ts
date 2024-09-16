import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { PostListComponent } from './post-list/post-list.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      {
        path: 'posts',
        component: PostListComponent,
        outlet: 'postOutlet',
      },
      {
        path: 'about',
        component: AboutComponent,
        outlet: 'postOutlet',
      }
    ],
  },
  { path: 'facesnaps/:id', component: SingleFaceSnapComponent },
  { path: 'facesnaps', component: FaceSnapListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
