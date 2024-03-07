import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { GamasModule } from '../gamas/gamas.module';

@Module({
  controllers: [ProductosController],
  providers: [ProductosService],
  imports: [
    GamasModule,
    TypeOrmModule.forFeature([Producto])
  ],
  exports: [ ProductosService, TypeOrmModule]
})
export class ProductosModule {}
