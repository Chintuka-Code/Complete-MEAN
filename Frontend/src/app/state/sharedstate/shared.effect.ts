import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserService } from 'src/app/service/user.service';
import { create_user_start, create_user_success } from './shared.action';
import { UserCreateResponse } from 'src/app/Model/user.interface';

@Injectable()
export class CreateUserEffect {
  constructor(private actions$: Actions, private user_service: UserService) {}

  $createUser = createEffect(() =>
    this.actions$.pipe(
      ofType(create_user_start),
      exhaustMap((action) =>
        this.user_service
          .create_user(action.data)
          .pipe(
            map((data: UserCreateResponse) =>
              create_user_success({ response: data.response })
            )
          )
      )
    )
  );
}
