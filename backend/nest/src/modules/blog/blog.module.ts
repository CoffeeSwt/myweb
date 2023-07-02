import { Blog } from './../../models/Blog';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import jwtConfig from 'src/config/jwt.config';
import { ConfigModule } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { RolesGuard } from '../auth/guards/roles.gurad';
import { APP_GUARD } from '@nestjs/core';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';

@Module({
  imports: [
    TypegooseModule.forFeature([Blog]),
    ConfigModule.forFeature(jwtConfig),
    JwtModule.registerAsync(jwtConfig.asProvider()),
  ],
  controllers: [BlogController],
  providers: [
    BlogService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    }, 
  ],
})
export class BlogModule {}
