import { Public } from "decorators/public.decorator";

import { Body, Controller, Post } from "@nestjs/common";

import { UserCredentialsDto } from "./auth-types/user-credentials.dto";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post("login")
  async signIn(@Body() signInDto: UserCredentialsDto) {
    return this.authService.signIn(signInDto);
  }
}
