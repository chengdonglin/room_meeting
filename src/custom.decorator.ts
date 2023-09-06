/*
 * @Description: 装饰器
 * @Date: 2023-09-06 10:24:22
 */
import {
  ExecutionContext,
  SetMetadata,
  createParamDecorator,
} from '@nestjs/common';
import { Request } from 'express';

// 需要登录装饰器
export const RequireLogin = () => SetMetadata('require-login', true);

// 需要权限装饰器
export const RequirePermission = (...permissions: string[]) =>
  SetMetadata('require-permission', permissions);

// 获取user信息装饰器
export const UserInfo = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();
    if (!request.user) {
      return null;
    }
    return data ? request.user[data] : request.user;
  },
);
