import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';

@Injectable()
export class ConfigService extends NestConfigService {
  constructor() {
    const envFilePath = process.env.NODE_ENV
      ? `.env.${process.env.NODE_ENV}`
      : '.env';
    dotenv.config({ path: envFilePath });
    super();
  }

  get clientId(): string {
    return this.get<string>('GITHUB_CLIENT_ID');
  }

  get clientToken(): string {
    return this.get<string>('GITHUB_CLIENT_SECRET');
  }
}
