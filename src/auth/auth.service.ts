import { UserService } from "src/user/user.service";

import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { UserCredentialsDto } from "./auth-types/user-credentials.dto";
import { PasswordlessUser } from "./auth.types";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    username: string,
    pass: string,
  ): Promise<PasswordlessUser | null> {
    const user = await this.userService.findOneByUsername(username);
    if (user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async signIn(user: UserCredentialsDto) {
    const existingUser = await this.userService.findOneByUsername(
      user.username,
    );
    const payload = {
      username: existingUser.username,
      sub: existingUser.id,
      role: existingUser.role,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
