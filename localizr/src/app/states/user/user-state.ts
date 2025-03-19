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
    {
      isLoggedIn,
      displayName,
      profilePicture,
      emailAddress,
      emailAddressVerified,
    }: SetLoginState
  ) {
    return this.membersService
      .resolveMember({
        displayName: displayName,
        emailAddress: emailAddress,
        emailAddressVerified: emailAddressVerified,
        profilePicture: profilePicture,
      })
      .pipe(
        tap((response) => {
          if (response.isSuccess) {
            ctx.patchState({
              isAuthenticated: isLoggedIn,
              displayName: response.data?.displayName || 'unknown',
              profilePicture: response.data?.profilePicture,
            });
          }
        })
      );
  }
}
