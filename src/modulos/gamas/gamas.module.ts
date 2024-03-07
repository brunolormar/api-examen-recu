import { Module } from '@nestjs/common';
import { GamasService } from './gamas.service';
import { GamasController } from './gamas.controller';
import { Gama } from './entities/gama.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [GamasController],
  providers: [GamasService],
  imports: [
    TypeOrmModule.forFeature([Gama])
  ]
})
export class GamasModule {}
