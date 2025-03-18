import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { SetLoginState } from './user-actions';

export interface IUserLoginStateModel {
  isAuthenticated: boolean;
  displayName: string;
  profilePictureUrl?: string;
}

@State<IUserLoginStateModel>({
  name: 'LoginState',
  defaults: {
    isAuthenticated: false,
    displayName: 'unknown',
  },
})
@Injectable()
export class UserLoginState {
  @Selector()
  static getTodoList(state: IUserLoginStateModel) {
    return state;
  }

  @Action(SetLoginState)
  changeLoginState(
    { getState, setState }: StateContext<IUserLoginStateModel>,
    { isLoggedIn, displayName, profilePictureUrl }: SetLoginState
  ) {
    const state = getState();
    setState({
      ...state,
      isAuthenticated: isLoggedIn,
      displayName: displayName || 'unknown',
      profilePictureUrl: profilePictureUrl,
    });
  }
}
