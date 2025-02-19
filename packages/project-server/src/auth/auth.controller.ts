import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { CreateUserDto } from '../user/dto/create-user.dto'
import { AuthGuard } from './auth.guard'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  async login(@Body() userInfo: CreateUserDto) {
    const { username, password } = userInfo

    return await this.authService.signIn(username, password)
  }

  @UseGuards(AuthGuard)
  @Post('profile')
  async getProfile(@Request() req) {
    return req.user
  }
}
