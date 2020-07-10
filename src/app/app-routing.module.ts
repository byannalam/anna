import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { InterestsComponent } from './interests/interests.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'interests', component: InterestsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
