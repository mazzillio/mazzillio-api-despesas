import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateDespesaDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';
import { PrismaService } from 'src/prisma/prisma-service.service';
import { Despesa } from 'generated/prisma';
import { ListDespesasDto } from './dto/list-depesas.dto';
import { generateDateFilter } from './utils/generate-date-filter';

@Injectable()
export class DespesasService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDespesaDto: CreateDespesaDto): Promise<Despesa> {
    const { title, date } = createDespesaDto;
    const existsDespesa = await this.prisma.despesa.findFirst({
      where: {
        title: title,
        date: new Date(date),
      },
    });
    if (existsDespesa) throw new BadRequestException('Despesa já existe');

    const despesa = await this.prisma.despesa.create({
      data: {
        ...createDespesaDto,
        date: new Date(date),
      },
    });

    return despesa as Despesa;
  }

  findAll(listDespesasDto: ListDespesasDto) {
    const { month, year } = listDespesasDto;
    const filters = {};

    const dateFilter = generateDateFilter({ year, month });
    if (dateFilter) {
      Object.assign(filters, dateFilter);
    }

    return this.prisma.despesa.findMany({
      where: filters,
    });
  }

  async findOne(id: string) {
    const despesa = await this.prisma.despesa.findUnique({
      where: {
        id,
      },
    });

    if (!despesa) {
      throw new NotFoundException('Despesa não encontrada');
    }

    return despesa;
  }

  async update(id: string, updateDespesaDto: UpdateDespesaDto) {
    const despesa = await this.prisma.despesa.findUnique({
      where: {
        id,
      },
    });

    if (!despesa) {
      throw new NotFoundException('Despesa não encontrada');
    }

    return this.prisma.despesa.update({
      where: {
        id,
      },
      data: updateDespesaDto,
    });
  }

  async remove(id: string) {
    const despesa = await this.prisma.despesa.findUnique({
      where: {
        id,
      },
    });

    if (!despesa) {
      throw new NotFoundException('Despesa não encontrada');
    }

    return this.prisma.despesa.delete({
      where: {
        id,
      },
    });
  }
}
