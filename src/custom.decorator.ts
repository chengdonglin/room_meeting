/*
 * @Description: 装饰器
 * @Date: 2023-09-06 10:24:22
 */
import { SetMetadata } from '@nestjs/common';

export const RequireLogin = () => SetMetadata('require-login', true);

export const RequirePermission = (...permissions: string[]) =>
  SetMetadata('require-permission', permissions);
