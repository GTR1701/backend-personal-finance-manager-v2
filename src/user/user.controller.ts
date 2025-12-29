import { Body, Controller, Get, Post } from "@nestjs/common";

import { User } from "./user.entity";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Post()
  async createUser(@Body() body: Partial<User>): Promise<User> {
    return this.usersService.create(body);
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
