import { Module } from '@nestjs/common';
import { AuthentificationController } from './authentification.controller';
import { AuthentificationService } from './authentification.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AuthentificationController],
  providers: [AuthentificationService, PrismaService],
})
export class AuthentificationModule {}
