// Import required modules
import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GithubService } from '../github/github.service';

/* --------------- Define controller and inject GithubService --------------- */
@Controller('auth')
export class AppController {
  constructor(private readonly githubService: GithubService) {}

  // Define githubLogin function to initiate the authentication process
  @Get('github')
  @UseGuards(AuthGuard('github'))
  githubLogin() {}

  // Define githubLoginCallback function to handle the callback from Github after authentication is completed
  @Get('github/callback')
  @UseGuards(AuthGuard('github'))
  githubLoginCallback(@Req() req, @Res() res) {
    // Redirect or send response as needed
    const accessToken = req.user.accessToken;
    // Set the authentication token in the cookie

    res.cookie('accessToken', accessToken, {
      expires: new Date(Date.now() + 3600 * 1000 * 24 * 180 * 1),
      httpOnly: true,
      sameSite: 'none',
      secure: 'true',
    });
    // Redirect to the create-repository page
    res.redirect('https://joyful-kashata-18c4b3.netlify.app/create-repository');
  }

  // Define createRepository function to create a new Github repository
  @Post('repositories')
  async createRepository(@Req() req) {
    // Extract repository name from request body
    const { name } = req.body;
    // Call GithubService to create a new repository
    const repository = await this.githubService.createRepository(name);
    // Return the created repository
    return repository;
  }
}
