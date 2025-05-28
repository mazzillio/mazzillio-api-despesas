import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { Categoria } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDespesaDto {
  @IsNotEmpty({ message: 'O título é obrigatório' })
  @IsString()
  @ApiProperty({
    description: 'O título da despesa',
    example: 'Compra de alimentos',
  })
  title: string;

  @IsNotEmpty({ message: 'O valor é obrigatório' })
  @IsNumber()
  @ApiProperty({
    description: 'O valor da despesa',
    example: 100.0,
  })
  amount: number;

  @IsNotEmpty({ message: 'A categoria é obrigatória' })
  @IsEnum(Categoria)
  @ApiProperty({
    description: 'A categoria da despesa',
    example: `${Categoria.ALIMENTACAO} | ${Categoria.SAUDE} | ${Categoria.TRANSPORTE} | ${Categoria.LAZER} | ${Categoria.OUTROS}`,
  })
  categoria: Categoria;

  @IsNotEmpty({ message: 'A data é obrigatória' })
  @IsDate()
  date: Date;
}
