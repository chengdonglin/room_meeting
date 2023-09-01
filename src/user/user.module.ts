/*
 * @Description:
 * @Date: 2023-09-01 10:57:59
 */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/User';
import { Role } from './entity/Role';
import { Permission } from './entity/permission';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role, Permission])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
