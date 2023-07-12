import { Component } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Store,Select } from '@ngxs/store';
import { UserSelector } from './store/user.selector';
import { userLogin } from './store/user.actions';
import { User } from '../models/user';

interface LoginComponentState {
  isAuthenticated: boolean;
  user: User| undefined
}

const initLoginComponentState: LoginComponentState = {
  isAuthenticated: false,
  user: undefined
};

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [RxState]
})
export class UserComponent {
  @Select(UserSelector.getUser)
  user$!: Observable<User | undefined>;
  
  user: User | undefined;
  isAuthenticated: boolean | false | undefined;
  username: string = '';
  password: string = '';

  constructor(
    private state: RxState<LoginComponentState>,
    private store: Store,
    private router: Router
  ) {
    this.state.set(initLoginComponentState);
    this.state.connect('user', this.user$)
  }

  ngOnInit(): void {
    this.user$.subscribe((user) => {
      this.user = user
      if (this.user) {
        this.router.navigate(['home']);
      } else {
        this.router.navigate(['']);
      }
    })
  }

  login() {
    if (this.username && this.password) {
      const user = {
        email: this.username,
        password: this.password
      };
      this.store.dispatch(new userLogin(user));
    }
  }
}
