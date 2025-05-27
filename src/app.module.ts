import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DespesasModule } from './despesas/despesas.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [DespesasModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
