import { Module } from '@nestjs/common';
import { GamasService } from './gamas.service';
import { GamasController } from './gamas.controller';

@Module({
  controllers: [GamasController],
  providers: [GamasService],
})
export class GamasModule {}
