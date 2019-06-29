import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from '../components/users/users.component';
import { ManageUserComponent } from '../components/manage-user/manage-user.component';
import { AddEditUserComponent } from '../components/add-edit-user/add-edit-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: ManageUserComponent },
  { path: 'add-user', component: AddEditUserComponent },
  { path: 'edit-user/:id', component: AddEditUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
