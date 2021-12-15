import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './Customer/customer.module';
import { DatabaseModule } from './Customer/Database/Database.module';
import { DataMysqlModule } from './user/Database/Database.module';
import { TaskModule } from './task_module/task.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [TaskModule,DatabaseModule,CustomerModule,DataMysqlModule,UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
