import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getInfo() {
    return {
      shop: this.configService.getOrThrow<string>('SHOP_NAME'),
      currency: this.configService.getOrThrow<string>('CURRENCY'),
      environment: this.configService.getOrThrow<string>('NODE_ENV'),
      status: 'ok',
    };
  }
}
