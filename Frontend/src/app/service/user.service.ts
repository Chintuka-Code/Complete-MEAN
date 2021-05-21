import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  create_user(data: FormData) {
    return this.http.post(`${environment.BASE_URL}/user/create-user`, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }
}
