import { Injectable } from '@nestjs/common';
import { CreateGamaDto } from './dto/create-gama.dto';
import { UpdateGamaDto } from './dto/update-gama.dto';

@Injectable()
export class GamasService {
  create(createGamaDto: CreateGamaDto) {
    return 'This action adds a new gama';
  }

  findAll() {
    return `This action returns all gamas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gama`;
  }

  update(id: number, updateGamaDto: UpdateGamaDto) {
    return `This action updates a #${id} gama`;
  }

  remove(id: number) {
    return `This action removes a #${id} gama`;
  }
}
