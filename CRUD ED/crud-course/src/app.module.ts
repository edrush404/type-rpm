import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CouserController } from './couser/couser.controller';
import { CourseService } from './couser/couser.service';


@Module({
  imports: [],
  controllers: [AppController, CouserController],
  providers: [AppService, CourseService],
})
export class AppModule {}
