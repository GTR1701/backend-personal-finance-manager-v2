import type { ConfigService } from "@nestjs/config";
import type { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const getTypeORMConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => {
  return {
    type: "postgres",
    host: configService.get<string>("DATABASE_HOST", "localhost"),
    port: configService.get<number>("DATABASE_PORT", 5432),
    username: configService.get<string>("DATABASE_USERNAME", "postgres"),
    password: configService.get<string>("DATABASE_PASSWORD", "postgres"),
    database: configService.get<string>("DATABASE_NAME", "mydb"),
    autoLoadEntities: true,
    synchronize: true,
  };
};
