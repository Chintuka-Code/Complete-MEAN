import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { confirmPassword } from 'src/app/CustomValidation/confirm.password';
import { UserCreateResponse } from 'src/app/Model/user.interface';
import { UserService } from 'src/app/service/user.service';
import {
  create_user_start,
  loading,
} from 'src/app/state/sharedstate/shared.action';
import { passwordValidation } from '../../CustomValidation/password.validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  register_form: FormGroup;
  image: any;

  constructor(
    private fb: FormBuilder,
    private user_service: UserService,
    private store: Store
  ) {}

  validation() {
    this.register_form = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, passwordValidation]],
        confirm_password: ['', [Validators.required]],
        mobile_number: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
            ),
          ],
        ],
        image: ['', [Validators.required]],
      },
      {
        validators: confirmPassword.bind(this.register_form),
      }
    );
  }

  getFiles(event) {
    this.image = event.target.files[0];
    const file_size = this.image.size / 1024 / 1024;
    if (!(Math.ceil(file_size) <= 2)) {
      this.register_form.get('image').setErrors({ fileSize: true });
    }
  }

  register_user() {
    this.store.dispatch(loading({ spinner: true }));
    const data = this.register_form.getRawValue();

    const formData: FormData = new FormData();

    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('mobile_no', data.mobile_number);
    formData.append('image', this.image);
    formData.append('gender', 'Male');

    formData.forEach((value, key) => {
      console.log(value);
    });
    this.store.dispatch(create_user_start({ data: formData }));
  }

  ngOnInit(): void {
    this.validation();
  }
}
