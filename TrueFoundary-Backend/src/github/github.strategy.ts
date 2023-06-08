import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-github';
import { Injectable } from '@nestjs/common';
import { GetGlobals } from 'src/globals';
@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor(private readonly authService: GetGlobals) {
    super({
      clientID: '2880dd258c35df8704b5',
      clientSecret: '4ecd6bce5f3de5910868c8911fdc87215a2cc552',
      callbackURL:
        'https://truefoundary-task-production.up.railway.app/auth/github/callback',
      scope: ['user', 'public_repo', 'repo'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
  ): Promise<any> {
    console.log('AUTH_TOKEN', accessToken);
    this.authService.setAccessToken(accessToken);
    return { accessToken, refreshToken, profile };
  }
}
