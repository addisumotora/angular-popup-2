import { createPickSelector, createSelector, Selector } from '@ngxs/store';
import { userState, userStateModel } from './user.state';
import { User } from 'src/app/models/user';

export class UserSelector {
  static UserState = createSelector(
    [userState],
    (state: userStateModel) => state
  );

  @Selector([userState])
  static getUser(state: userStateModel): User {
    return state.user!;
  }
}