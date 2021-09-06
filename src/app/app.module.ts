import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './shared/layout/navigation-bar/navigation-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { UploadImageComponent } from './pages/upload-image/upload-image.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MyCollectionsComponent } from './pages/my-collections/my-collections.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    UploadImageComponent,
    LoginComponent,
    ProfileComponent,
    MyCollectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
