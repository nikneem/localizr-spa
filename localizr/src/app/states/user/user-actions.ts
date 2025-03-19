export class SetLoginState {
  static readonly type = '[UserState] ChangeLoginState';
  constructor(
    public isLoggedIn: boolean,
    public displayName: string,
    public emailAddress: string,
    public emailAddressVerified: boolean,
    public profilePicture?: string
  ) {}
}
