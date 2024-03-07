import { Injectable, InternalServerErrorException, Patch, Post } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GamasService } from '../gamas/gamas.service';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
    private gamasService: GamasService
  ) {}

  @Post()
  async create(createProductoDto: CreateProductoDto) {
    try {
      const {gama, ...campos } = createProductoDto;
      const producto = this.productoRepository.create({...campos});
      const gamaobj = await this.gamasService.findOne(gama);
      producto.gama = gamaobj;
      console.log(producto);
      await this.productoRepository.save(producto);

      return{
        status: 200,
        data: producto,
        msg: 'Producto insertado correctamente'
      }
    }catch(error){
      console.log(error);
      throw new InternalServerErrorException('Pongase en contacto con el Sysadmin')
    }
  }

  findAll() {
    return `This action returns all productos`;
  }

  findOne(Gama: string) {
    const gama= this.productoRepository.findOne({
      where:{
        Gama
      },
      relations: {
        gama: true
      }
    });
    return gama;
  }


  @Patch()
  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }

  async deleteAllProductos(){
    const query = this.productoRepository.createQueryBuilder('producto');
    try{
      return await query
        .delete()
        .where({})
        .execute()
    }catch(error){
      throw new InternalServerErrorException('sysadmin ...')
    }
  }
}
