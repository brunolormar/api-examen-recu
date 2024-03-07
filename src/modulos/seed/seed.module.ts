import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { GamasModule } from '../gamas/gamas.module';
import { ProductosModule } from '../productos/productos.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [ GamasModule, ProductosModule ]
})
export class SeedModule {}
