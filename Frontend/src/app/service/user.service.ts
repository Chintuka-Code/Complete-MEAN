import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserCreateResponse } from '../Model/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  create_user(data: FormData): Observable<UserCreateResponse> {
    return this.http.post<UserCreateResponse>(
      `${environment.BASE_URL}/user/create-user`,
      data
    );
  }
}
