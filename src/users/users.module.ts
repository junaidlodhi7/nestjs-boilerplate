import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users/users.controller';
import { UserServiceService } from './user-service/user-service.service';
import {userSchema} from './userSchema';

@Module({
  imports:[MongooseModule.forFeature([{ name: 'users', schema: userSchema }])],
  controllers: [UsersController],
  providers: [UserServiceService]
})
export class UsersModule {}
