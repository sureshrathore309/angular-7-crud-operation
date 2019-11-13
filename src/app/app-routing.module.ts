import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { userComponent } from './user/user.component';
import { AdduserComponent } from './add-user/add-user.component';

const routes: Routes = [

  { path:'', component: userComponent},
  { path:'adduser', component: AdduserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
