import { Injectable, InternalServerErrorException, Patch, Post } from '@nestjs/common';
import { CreateGamaDto } from './dto/create-gama.dto';
import { UpdateGamaDto } from './dto/update-gama.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Gama } from './entities/gama.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GamasService {
  constructor(
    @InjectRepository(Gama)
    private readonly gamaRepository: Repository<Gama>
  ) {}

  @Post()
  async create(createGamaDto: CreateGamaDto) {
    try {
      const gama = this.gamaRepository.create(createGamaDto);

      await this.gamaRepository.save(gama);
      return{
        msg: 'Registro Insertado',
        data: gama,
        status: 200
      }
    }catch(error){
      console.log(error);
      throw new InternalServerErrorException('Pongase en contacto con el Sysadmin')
    }
  }

  findAll() {
    return `This action returns all gamas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gama`;
  }

  @Patch()
  update(id: number, updateGamaDto: UpdateGamaDto) {
    return `This action updates a #${id} gama`;
  }

  remove(id: number) {
    return `This action removes a #${id} gama`;
  }
}
