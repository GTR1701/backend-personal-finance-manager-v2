import type { User } from "src/user/user.entity";

export type PasswordlessUser = Omit<User, "password">;

export interface JwtPayload {
  username: string;
  sub: number;
  role: string;
}
