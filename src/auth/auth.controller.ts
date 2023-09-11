import { Body, Controller, HttpCode, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Res() res, @Body() signInDto: Record<string, any>) {
    const UserLogged = await this.authService.signIn(signInDto.username, signInDto.password);
    return res.status(HttpStatus.OK).json({
      message:"User has been successfully logged",
      post: UserLogged
    })
  }
}
