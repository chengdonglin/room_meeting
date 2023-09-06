/*
 * @Description:
 * @Date: 2023-09-01 10:49:49
 */
import { Controller, Get, SetMetadata } from '@nestjs/common';
import { AppService } from './app.service';
import { RequireLogin, RequirePermission, UserInfo } from './custom.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('aaa')
  @RequireLogin()
  @RequirePermission('ddd')
  aaaa(@UserInfo('username') username: string, @UserInfo() userInfo) {
    console.log(username);
    console.log(userInfo);
    return 'aaa';
  }

  @Get('bbb')
  bbb() {
    return 'bbb';
  }
}
