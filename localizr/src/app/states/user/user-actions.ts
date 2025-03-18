export class SetLoginState {
  static readonly type = '[UserState] ChangeLoginState';
  constructor(
    public isLoggedIn: boolean,
    public displayName: string,
    public profilePictureUrl?: string
  ) {}
}
