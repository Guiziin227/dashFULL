import { JwtModuleOptions } from '@nestjs/jwt';
import { registerAs } from '@nestjs/config';
import * as process from 'node:process';


export default registerAs("jwt",():JwtModuleOptions => ({
  secret: process.env.JWT_SECRET,
  signOptions: {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  }
}));