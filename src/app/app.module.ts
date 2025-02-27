import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
    declarations: [
        AppComponent,
        FaceSnapComponent,
        FaceSnapListComponent,
        HeaderComponent,
        LandingPageComponent,
        SingleFaceSnapComponent,
        PostListComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [
        provideHttpClient(withInterceptorsFromDi())
    ]
})
export class AppModule { }
