import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { confirmPassword } from 'src/app/CustomValidation/confirm.password';
import { passwordValidation } from '../../CustomValidation/password.validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  register_form: FormGroup;
  image: any;

  constructor(private fb: FormBuilder) {}

  validation() {
    this.register_form = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, passwordValidation]],
        confirm_password: ['', [Validators.required]],
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
    const data = this.register_form.getRawValue();
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('image', this.image);
    console.log(this.image);
  }

  ngOnInit(): void {
    this.validation();
  }
}
