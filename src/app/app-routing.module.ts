import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopupComponent } from './popup/popup.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'home', component: PopupComponent
  },
  {
    path:'', component:UserComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
