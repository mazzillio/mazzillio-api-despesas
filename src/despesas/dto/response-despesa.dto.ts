import { ApiProperty } from '@nestjs/swagger';
import { Categoria, Despesa } from '@prisma/client';
import { randomUUID } from 'node:crypto';
const uuid = randomUUID();
export class ResponseDespesaDto {
  constructor(data: Despesa) {
    this.id = data.id;
    this.title = data.title;
    this.amount = data.amount;
    this.categoria = data.categoria;
    this.date = data.date;
  }
  @ApiProperty({
    description: 'O id da despesa',
    example: uuid,
  })
  id: string;

  @ApiProperty({
    description: 'O título da despesa',
    example: 'Compra de alimentos',
  })
  title: string;

  @ApiProperty({
    description: 'O valor da despesa',
    example: 100.0,
  })
  amount: number;

  @ApiProperty({
    description: 'A categoria da despesa',
    example: Categoria.ALIMENTACAO,
  })
  categoria: Categoria;

  @ApiProperty({
    description: 'A data da despesa',
    example: '2021-01-01',
  })
  date: Date;
}
