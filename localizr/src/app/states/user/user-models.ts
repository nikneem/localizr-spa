export interface IUserLoginStateModel {
  isAuthenticated: boolean;
  displayName: string;
  profilePicture?: string;
}

export interface IUserProfileCommand {
  displayName: string;
  emailAddress: string;
  emailAddressVerified: boolean;
  profilePicture?: string;
}
export interface IUserDetailsResponse {
  id: string;
  displayName: string;
  emailAddress: string;
  profilePicture: string;
}
