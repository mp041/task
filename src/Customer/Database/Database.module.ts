import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://valid:valid@cluster0.qpaeb.mongodb.net/nestMongo?retryWrites=true&w=majority',{useNewUrlParser: true})
  ],
  controllers: [],
  providers: [],
})
export class DatabaseModule {}
