import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  types = [
    'admin',
    'staff',
    'student'
  ];
  isFormSubmitted = false;
  editMode = false;
  userid: string;
  retrieveError = false;
  created_date = new Date().toString()

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userService: UserService) {

    this.userid = this.route.snapshot.paramMap.get('id')
    this.editMode = this.userid !== null;
    this.createForm();
  }

  ngOnInit() {
    this.setTitle();
    if (this.editMode) {
      this.setUserData();
    }
  }

  setTitle(): void {
    if (this.editMode) {
      this.titleService.setTitle('Edit user');
    } else {
      this.titleService.setTitle('Add user');
    }
  }

  createForm(): void {
    this.userForm = this.formBuilder.group({
      user_name: ['', [Validators.required, Validators.minLength(3)]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      type: ['', Validators.required]
    });
  }

  setUserData(): void {
    this.userService.getUserById(this.userid)
      .subscribe(user => {
        this.userForm.setValue({
          'user_name': user.user_name,
          'first_name': user.first_name,
          'last_name': user.last_name,
          'type': user.type
        });
      }, err => {
        this.retrieveError = true;
      });
  }

  get user_name() { return this.userForm.get('user_name'); }
  get first_name() { return this.userForm.get('first_name'); }
  get last_name() { return this.userForm.get('last_name'); }
  get type() { return this.userForm.get('type'); }

  submitForm(user: User): void {
    if (this.userForm.valid) {
      if (this.editMode) {
        user.id = this.userid;
        this.userService.updateUser(user)
        .subscribe(data => { this.isFormSubmitted = true; },
          err => {console.log(err); this.isFormSubmitted = null; });
      } else {
        user.id = user.user_name+'_'+user.created_date
        user.created_date = this.created_date
        this.userService.addUser(user)
          .subscribe(data => { this.isFormSubmitted = true; },
            err => { this.isFormSubmitted = null; });
      }
    }
  }
}
