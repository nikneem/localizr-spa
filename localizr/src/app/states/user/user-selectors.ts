import { Selector } from '@ngxs/store';
import { UserLoginState } from './user-state';
import { IUserLoginStateModel } from './user-models';

export class UserLoginSelectors {
  @Selector([UserLoginState])
  static getLoginState(state: IUserLoginStateModel): IUserLoginStateModel {
    return state;
  }
}
