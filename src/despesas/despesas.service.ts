import { Injectable } from '@nestjs/common';
import { CreateDespesaDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';
import { PrismaService } from 'src/prisma/prisma-service.service';
import { Despesa } from 'generated/prisma';
import { ListDespesasDto } from './dto/list-depesas.dto';

@Injectable()
export class DespesasService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createDespesaDto: CreateDespesaDto): Promise<Despesa> {
    const despesa = await this.prisma.despesa.create({
      data: createDespesaDto,
    });

    return despesa as Despesa;
  }

  findAll(listDespesasDto: ListDespesasDto) {
    const { title, month, year, categoria } = listDespesasDto;
    const filters = {};

    if (title) {
      Object.assign(filters, { title: { contains: title } });
    }

    if (year) {
      const startDate = new Date(year, 0, 1); // Primeiro dia do ano
      const endDate = new Date(year + 1, 0, 1); // Primeiro dia do próximo ano

      Object.assign(filters, {
        date: {
          gte: startDate,
          lt: endDate,
        },
      });
    }

    if (categoria) {
      Object.assign(filters, { categoria });
    }

    return this.prisma.despesa.findMany({
      where: filters,
    });
  }

  findOne(id: string) {
    return this.prisma.despesa.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updateDespesaDto: UpdateDespesaDto) {
    return this.prisma.despesa.update({
      where: {
        id,
      },
      data: updateDespesaDto,
    });
  }

  remove(id: string) {
    return this.prisma.despesa.delete({
      where: {
        id,
      },
    });
  }
}
