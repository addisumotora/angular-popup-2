import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken, Store } from '@ngxs/store';
import { User } from 'src/app/models/user';
import { userLogin } from './user.actions';
import { UserService } from '../user.service';
import { tap } from 'rxjs';
import { patch } from '@ngxs/store/operators';

export interface userStateModel {
  user: User | undefined;
}

const user_state_token = new StateToken<userStateModel>('userState');

const defaults = {
  user: undefined,
};

@State<userStateModel>({
  name: user_state_token,
  defaults: defaults,
})
@Injectable()
export class userState {
  constructor(private userService: UserService) {}

  @Action(userLogin)
  login(
    { setState }: StateContext<userStateModel>,
    { userCredentials }: userLogin
  ) {
    return this.userService.login(userCredentials).pipe(
      tap((user) => {
        setState(
          patch({
            user: user
          })
        )
      })
    )
  }
}
