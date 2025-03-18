import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { SetLoginState } from './user-actions';
import { IUserLoginStateModel } from './user-models';
import { MembersService } from '../../services/members.service';
import { tap } from 'rxjs';

@State<IUserLoginStateModel>({
  name: 'LoginState',
  defaults: {
    isAuthenticated: false,
    displayName: 'unknown',
  },
})
@Injectable()
export class UserLoginState {
  constructor(private membersService: MembersService) {}

  @Selector()
  static getTodoList(state: IUserLoginStateModel) {
    return state;
  }

  @Action(SetLoginState)
  changeLoginState(
    ctx: StateContext<IUserLoginStateModel>,
    { isLoggedIn, displayName, profilePictureUrl }: SetLoginState
  ) {
    return this.membersService
      .resolveMember({
        displayName: displayName,
        emailAddress: 'unknown',
        profilePictureUrl: profilePictureUrl,
      })
      .pipe(
        tap((response) => {
          if (response.isSuccess) {
            ctx.patchState({
              isAuthenticated: isLoggedIn,
              displayName: response.result?.displayName || 'unknown',
              profilePictureUrl: response.result?.profilePictureUrl,
            });
          }
        })
      );
  }
}
