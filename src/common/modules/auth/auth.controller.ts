import { Body, Controller, Post, Get, UseGuards, Req, Res } from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { LocalGuard } from './guards/local.guard';
import { Serialize } from '~interceptors/custom.interceptor';
import { SignUpDto } from './dto/signup.dto';
import { UserDto } from '~user/dto/user.dto';
import { LoggedInGuard } from './guards/logged-in.guard';
import { AdminGuard } from './guards/admin.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  /*Login*/
  @UseGuards(LocalGuard)
  @Post('login')
  loginUser(@Req() req: any) {
    return {
      ...req.session,
      message: 'User successfully logged in',
    };
  }

  /*Sign up*/
  @Serialize(UserDto)
  @ApiCreatedResponse({ description: 'A user has been successfully created' })
  @Post('register')
  register(@Body() user: SignUpDto) {
    return this.authService.registerUser(user);
    //TODO: redirect to login page
  }

  /*Logout*/
  @Post('logout')
  logout(@Req() req: any, @Res() res: any) {
    req.logout(() => {
      res.redirect('/api/v1');
    });
  }

  @UseGuards(LoggedInGuard)
  @Get('protected')
  guardedRoute(@Req() req: any) {
    return {
      user: req.user,
      message: 'You can only see this if you are authenticated',
    };
  }

  @UseGuards(AdminGuard)
  @Get('admin')
  getAdminMessage(@Req() req: any) {
    return {
      admin: req.user.admin,
      message: 'You can only see this if you are an admin',
    };
  }
}
