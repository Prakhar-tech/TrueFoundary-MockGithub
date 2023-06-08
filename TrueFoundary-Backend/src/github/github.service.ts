// Import necessary modules and classes from NestJS
import { Injectable } from '@nestjs/common';
import { Octokit } from '@octokit/rest';
import { ConfigService } from '../config/config.service';
import { GetGlobals } from 'src/globals';
import * as fs from 'fs/promises';

// Define a service for Github
@Injectable()
export class GithubService {
  private octokit: Octokit;

  // Inject the authentication service as a dependency using the constructor
  constructor(private readonly authService: GetGlobals) {}

  // Define a function to create a new repository on Github
  async createRepository(repoName: string): Promise<any> {
    try {
      // Create a new client for the Github API using the authentication token from the configuration service
      this.octokit = new Octokit({
        auth: this.authService.getAccessToken(),
      });

      // Create a new repository for the authenticated user with the specified name, description, and privacy setting
      const createRepoResponse =
        await this.octokit.repos.createForAuthenticatedUser({
          name: repoName,
          description: 'Automated Sample Repository',
          private: true,
          auto_init: true,
        });

      // Get the repository details
      const owner = createRepoResponse.data.owner.login;
      const repo = createRepoResponse.data.name;

      // Read the content of sampleCode.txt file
      const filePath = 'sampleCode.txt';
      const fileContent = await fs.readFile(filePath, 'utf8');

      // Create a file with sample code in the repository
      await this.octokit.repos.createOrUpdateFileContents({
        owner,
        repo,
        path: 'TrueFoundaryMission.js',
        message: 'Automated Repo',
        content: Buffer.from(fileContent).toString('base64'),
      });

      // Return the response data from creating the repository
      return createRepoResponse.data;
    } catch (error) {
      // Log and re-throw any errors that occur
      console.log(error.message);
      throw error;
    }
  }
}
