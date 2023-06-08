import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
import { Request, Response, NextFunction } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  var corsOptions = {
    origin: 'https://joyful-kashata-18c4b3.netlify.app', //frontend url
    credentials: true,
  };
  app.use(cors(corsOptions));

  app.use(function (req: Request, res: Response, next: NextFunction) {
    res.header(
      'Access-Control-Allow-Origin: https://joyful-kashata-18c4b3.netlify.app',
    );
    res.header('Access-Control-Allow-Credentials: true');
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header('Access-Control-Allow-Headers: Content-Type, *');
    next();
  });

  // Use cookie-parser middleware
  app.use(cookieParser());
  const PORT = process.env.PORT || 8000;
  await app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

bootstrap();
