import { Component, OnInit, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  isDataAvailable = false;

  constructor(
    private titleService: Title,
    private userService: UserService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.titleService.setTitle('Users');
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      this.cdr.detectChanges();
      this.isDataAvailable = true;
      console.log('Users successfuly fetched!');
    }, err => {
      console.log('danger => Problem fetching users, try again later!');
    });
  }

  deleteUser(userid: string): void {
    this.userService.deleteUser(userid).subscribe(() => {
      this.users = this.users.filter(user => user.id !== userid);
      this.cdr.detectChanges();
      console.log('User deleted successfully!');
    }, err => {
      console.log('danger => Error deleting user!');
    });
  }
}
