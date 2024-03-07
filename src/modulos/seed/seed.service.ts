import { Injectable } from '@nestjs/common';
import { GamasService } from '../gamas/gamas.service';
import * as seedGamas from '../seed/data/gamasproductos.json'
import * as seedProductos from '../seed/data/productos.json'
import { Gama } from '../gamas/interfaces/gama.interface';
import { CreateGamaDto } from '../gamas/dto/create-gama.dto';
import { ProductosService } from '../productos/productos.service';
import { Producto } from '../productos/interfaces/producto.interface';
@Injectable()
export class SeedService {
  constructor (private readonly gamaService: GamasService,
               private readonly productoService: ProductosService){}
  
  public async loadData(){
    await this.insertNewGamas();
    this.insertNewProductos();
  }

  private async insertNewGamas(){
    await this.gamaService.deleteAllGamas();
    const insertPromisesGamas = [];
    seedGamas.forEach( (gama: Gama) => {
      insertPromisesGamas.push(this.gamaService.create(gama));      
    });
    const results = await Promise.all(insertPromisesGamas);
    return true;
  }

  private async insertNewProductos(){
    await this.productoService.deleteAllProductos();
    const insertPromisesProductos = [];
    seedProductos.forEach( (producto: Producto) => {
      insertPromisesProductos.push(this.productoService.create(producto));      
    });
    const results = await Promise.all(insertPromisesProductos);
    return true;
  }
}