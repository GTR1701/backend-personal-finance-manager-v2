import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
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
  async getUserById(@Param("id", ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Get("name/:username")
  async getUserByUsername(@Param("username") username: string) {
    return this.usersService.findOneByUsername(username);
  }

  @Post()
  async createUser(@Body() body: Partial<User>) {
    return this.usersService.create(body);
  }

  @Patch(":id")
  async updateUser(
    @Param("id", ParseIntPipe) id: number,
    @Body() body: Partial<User>,
  ) {
    return this.usersService.updateUser(id, body);
  }

  @Delete(":id")
  async deleteUser(@Param("id", ParseIntPipe) id: number) {
    return this.usersService.deleteUser(id);
  }
}
