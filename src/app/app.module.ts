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
    ViewImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot(),
    CommonModule,
    TabsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
