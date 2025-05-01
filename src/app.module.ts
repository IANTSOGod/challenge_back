import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { AuthentificationModule } from './authentification/authentification.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    AuthentificationModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
