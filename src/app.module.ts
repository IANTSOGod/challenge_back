import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { AuthentificationModule } from './authentification/authentification.module';
import { EmailController } from './email/email.controller';
import { EmailModule } from './email/email.module';
import { OtpService } from './otp/otp.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    AuthentificationModule,
    EmailModule,
  ],
  controllers: [EmailController],
  providers: [PrismaService, OtpService],
})
export class AppModule {}
