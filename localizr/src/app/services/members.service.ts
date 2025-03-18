import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IUserDetailsResponse,
  IUserProfileCommand,
} from '../states/user/user-models';
import { Observable } from 'rxjs';
import { ILocalizrResponse } from '../shared/models/localizr.base-models';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  private baseAddress: string;
  constructor(private http: HttpClient) {
    this.baseAddress = 'https://localhost:7215';
  }

  resolveMember(
    requestPayload: IUserProfileCommand
  ): Observable<ILocalizrResponse<IUserDetailsResponse>> {
    return this.http.post<ILocalizrResponse<IUserDetailsResponse>>(
      `${this.baseAddress}/members`,
      requestPayload
    );
  }
}
