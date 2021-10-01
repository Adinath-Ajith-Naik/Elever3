import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './pages/info/info.component';
import { LoginComponent } from './pages/login/login.component';
import { MyCollectionsComponent } from './pages/my-collections/my-collections.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UploadImageComponent } from './pages/upload-image/upload-image.component';
import { NavigationBarComponent } from './shared/layout/navigation-bar/navigation-bar.component';
import { ViewImageComponent } from './pages/view-image/view-image.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    UploadImageComponent,
    LoginComponent,
    ProfileComponent,
    MyCollectionsComponent,
    InfoComponent,
    ViewImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot(),
    CommonModule,
    TabsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAhm8bg2uE8oroeU8Yl1895VyhsfkBoeng',
      authDomain: 'pixels-9239e.firebaseapp.com',
      projectId: 'pixels-9239e',
      storageBucket: 'pixels-9239e.appspot.com',
      messagingSenderId: '776899529535',
      appId: '1:776899529535:web:1f0f315f1cc885ae44a18a',
      measurementId: 'G-SB3VJJTSF1',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
