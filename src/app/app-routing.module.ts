import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './pages/info/info.component';
import { LoginComponent } from './pages/login/login.component';
import { MyCollectionsComponent } from './pages/my-collections/my-collections.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UploadImageComponent } from './pages/upload-image/upload-image.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo:'/info',pathMatch:'full'},
      { path: 'home', component:HomeComponent},
      { path: 'my-account', component: ProfileComponent },
      { path: 'my-collections', component: MyCollectionsComponent },
      { path: 'upload', component: UploadImageComponent },
    ]
  },
  { path: 'sign-in', component: LoginComponent },
  { path: 'info', component: InfoComponent },
  { path: '**', redirectTo:'/info',pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
