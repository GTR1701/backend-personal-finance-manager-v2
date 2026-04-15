import { Repository, UpdateResult } from "typeorm";

import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { User } from "./user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const response = await this.userRepository.findOne({ where: { id } });
    if (response == null) {
      throw new NotFoundException("User not found");
    }
    return response;
  }

  async findOneByUsername(username: string): Promise<User> {
    const response = await this.userRepository.findOne({
      where: { username },
    });
    if (response == null) {
      throw new NotFoundException("User not found");
    }
    return response;
  }

  async create(userData: Partial<User>): Promise<User> {
    const existingUser = await this.userRepository.findOne({
      where: { username: userData.username },
    });
    if (existingUser != null) {
      throw new Error("Username already exists");
    }

    const newUser = this.userRepository.create(userData);
    return await this.userRepository.save(newUser);
  }

  async updateUser(id: number, userData: Partial<User>): Promise<UpdateResult> {
    await this.findOne(id);
    return await this.userRepository.update(id, userData);
  }

  async deleteUser(id: number): Promise<void> {
    const user = await this.findOne(id);
    await this.userRepository.remove(user);
  }
}
