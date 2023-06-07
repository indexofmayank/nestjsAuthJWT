import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModel } from './auth/auth.module';
import {PassportModule} from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtStratedy } from './auth/jwt.strategy';


@Module({
  imports: [
    AuthModel,
    PassportModule,
    JwtModule.register({secret: 'secrete', signOptions: {expiresIn: '1h'}})
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService, JwtStratedy],
})
export class AppModule {}
