import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";

import { User } from "./user.entity";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Get()
  async getAllUsers() {
    return this.usersService.findAll();
  }

  @Get(":id")
  async getUserById(@Param("id") id: number) {
    return this.usersService.findOne(id);
  }

  @Post()
  async createUser(@Body() body: Partial<User>) {
    return this.usersService.create(body);
  }

  @Patch(":id")
  async updateUser(@Param("id") id: number, @Body() body: Partial<User>) {
    return this.usersService.updateUser(id, body);
  }

  @Delete(":id")
  async deleteUser(@Param("id") id: number) {
    return this.usersService.delete(id);
  }
}
