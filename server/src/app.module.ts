import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SneakersController } from './sneakers/sneakers.controller';

@Module({
  imports: [],
  controllers: [AppController, SneakersController],
  providers: [AppService],
})
export class AppModule {}
