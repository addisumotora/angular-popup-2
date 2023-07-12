import { createPickSelector, createSelector, Selector } from '@ngxs/store';
import { User } from 'src/app/models/user';
import { PopState, PopStateModel } from './popup.state';

export class PopSelector {
  static UserState = createSelector(
    [PopState],
    (state: PopStateModel) => state
  );

  @Selector([PopState])
  static category(state: PopStateModel): string[] {
    return state.categories!;
  }
}