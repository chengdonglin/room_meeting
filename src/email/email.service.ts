/*
 * @Description: 邮箱service
 * @Date: 2023-09-01 11:44:57
 */
import { Injectable } from '@nestjs/common';
import { createTransport, Transporter } from 'nodemailer';

@Injectable()
export class EmailService {
  transporter: Transporter;
  constructor() {
    this.transporter = createTransport({
      host: 'smtp.qq.com',
      port: 587,
      secure: false,
      auth: {
        user: '496643881@qq.com',
        pass: 'zfkaumhxdwqqbjhi',
      },
    });
  }
  async sendMail({ to, subject, html }) {
    await this.transporter.sendMail({
      from: {
        name: '会议室预定系统',
        address: '496643881@qq.com',
      },
      to,
      subject,
      html,
    });
  }
}
