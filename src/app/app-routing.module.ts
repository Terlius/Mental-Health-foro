import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { AddPostComponent } from './pages/add-post/add-post.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'add', component: AddPostComponent},
  {path: '**', redirectTo: ''}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
