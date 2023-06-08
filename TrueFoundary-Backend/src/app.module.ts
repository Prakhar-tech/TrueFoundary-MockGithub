// Import necessary modules and classes from NestJS
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
// Import services and controllers from the application
import { GithubStrategy } from './github/github.strategy';
import { AppController } from './auth/auth.controller';
import { GithubService } from './github/github.service';
import { ConfigService } from './config/config.service';
import { GetGlobals } from './globals';

@Module({
  /* -------------- Import necessary modules for the application -------------- */
  imports: [
    ConfigModule.forRoot(), // Configure the configuration service for the application
    PassportModule.register({ defaultStrategy: 'github' }), // Add authentication strategies to the application
  ],
  /* ------- Specify which controllers are initialized within the module ------ */
  controllers: [AppController],

  /* -------- Specify which providers are initialized within the module ------- */
  providers: [GetGlobals, GithubStrategy, GithubService, ConfigService],

  /* ----- Make the ConfigService provider available outside of the module ---- */
  exports: [ConfigService],
})
export class AppModule {}
