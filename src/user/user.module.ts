import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerController } from './user.controller';
import { CustomerService } from './user.service';
import { User } from './Database/entity/user.entity';
import { CustomerSchema } from './Schema/customers.schema';



@Module({
  imports: [TypeOrmModule.forFeature([User])], 
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class UserModule {}
