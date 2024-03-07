import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {
  public loadData(){
    return {
      msg: 'Carga de datos finalizada'
    }
  }
}
