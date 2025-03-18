export interface IUserLoginStateModel {
  isAuthenticated: boolean;
  displayName: string;
  profilePictureUrl?: string;
}

export interface IUserProfileCommand {
  displayName: string;
  emailAddress: string;
  profilePictureUrl?: string;
}
export interface IUserDetailsResponse {
  id: string;
  displayName: string;
  emailAddress: string;
  profilePictureUrl: string;
}
