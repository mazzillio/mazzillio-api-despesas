import { Injectable } from '@nestjs/common';
import { CreateDespesaDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';
import { PrismaService } from 'src/prisma/prisma-service.service';
import { Despesa } from 'generated/prisma';

@Injectable()
export class DespesasService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createDespesaDto: CreateDespesaDto): Promise<Despesa> {
    const despesa = await this.prisma.despesa.create({
      data: createDespesaDto,
    });

    return despesa as Despesa;
  }

  findAll() {
    return `This action returns all despesas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} despesa`;
  }

  update(id: number, updateDespesaDto: UpdateDespesaDto) {
    return `This action updates a #${id} despesa`;
  }

  remove(id: number) {
    return `This action removes a #${id} despesa`;
  }
}
