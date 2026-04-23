import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: (
      origin: string | undefined,
      callback: (error: Error | null, allow?: boolean) => void,
    ) => {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (origin === undefined) {
        callback(null, true);
        return;
      }

      // Check if origin is localhost with allowed ports (3000-4599)
      const localhostPortPattern =
        /^https?:\/\/localhost:(30\d{2}|4[0-4]\d{2})$/;
      const localhostPattern = /^https?:\/\/localhost$/;

      if (localhostPattern.test(origin) || localhostPortPattern.test(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("Not allowed by CORS"), false);
    },
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
