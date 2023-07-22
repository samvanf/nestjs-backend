import { Module } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [SwaggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
