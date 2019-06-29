import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockDataService } from './services/mock-data.service';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { AddEditUserComponent } from './components/add-edit-user/add-edit-user.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { UserService } from './services/user.service';

import { ManageUserComponent } from './components/manage-user/manage-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AddEditUserComponent,
    ManageUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MockDataService, { dataEncapsulation: false })
  ],
  providers: [
    Title,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
