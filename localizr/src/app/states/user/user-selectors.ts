import { Selector } from '@ngxs/store';
import { IUserLoginStateModel, UserLoginState } from './user-state';

export class UserLoginSelectors {
  @Selector([UserLoginState])
  static getLoginState(state: IUserLoginStateModel): IUserLoginStateModel {
    return state;
  }
}
