import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PollController } from './poll/poll.controller';
import { PollService } from './poll/poll.service';
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, PollController],
  providers: [AppService, PollService],
})
export class AppModule {}
