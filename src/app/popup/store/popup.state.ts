import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken, Store } from '@ngxs/store';
import { User } from 'src/app/models/user';
import { tap } from 'rxjs';
import { patch } from '@ngxs/store/operators';
import { PopupSevice } from '../popup.service';
import { GetCategory } from './popup.actions';

export interface PopStateModel {
  categories: string[];
}

const user_state_token = new StateToken<PopStateModel>('popState');

const defaults = {
    categories: [],
};

@State<PopStateModel>({
  name: user_state_token,
  defaults: defaults,
})
@Injectable()
export class PopState {
  constructor(private popupService: PopupSevice) {}

  @Action(GetCategory)
  login(
    { setState }: StateContext<PopStateModel>,
  ) {
    return this.popupService.getCategory().pipe(
      tap((categories) => {
        setState(
          patch({
            categories: categories
          })
        )
      })
    )
  }
}
