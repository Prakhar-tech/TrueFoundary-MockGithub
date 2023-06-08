import { Injectable } from '@nestjs/common';

/* ----------------- Define a service for storing globals ---------------- */
@Injectable()
export class GetGlobals {
  private accessToken: string;
  private readonly GITHUB_CLIENT_ID: string = '2880dd258c35df8704b5';
  private readonly GITHUB_CLIENT_SECRET: string =
    '4ecd6bce5f3de5910868c8911fdc87215a2cc552';

  // Define a function to set the access token
  setAccessToken(accessToken: string): void {
    this.accessToken = accessToken;
  }

  // Define a function to get the access token
  getAccessToken(): string {
    return this.accessToken;
  }

  // Define a function to get the Github client ID
  getGithubClientId(): string {
    return this.GITHUB_CLIENT_ID;
  }
  // Define a function to get the Github client secret
  getGithubClientSecret(): string {
    return this.GITHUB_CLIENT_SECRET;
  }
}
