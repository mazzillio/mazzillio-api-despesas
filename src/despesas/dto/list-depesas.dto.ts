import { ApiProperty } from '@nestjs/swagger';
import { Categoria } from '@prisma/client';
import { IsEnum, IsNumber, IsOptional } from 'class-validator';

export class ListDespesasDto {
  @IsOptional()
  @ApiProperty({
    description: 'O título da despesa',
    example: 'Compra de alimentos',
    required: false,
  })
  title: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({
    description: 'O mês da despesa',
    example: 1,
    required: false,
  })
  month: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({
    description: 'O ano da despesa',
    example: 2025,
    required: false,
  })
  year: number;

  @IsOptional()
  @IsEnum(Categoria)
  @ApiProperty({
    enum: Categoria,
    description: 'A categoria da despesa',
    example: Categoria.ALIMENTACAO,
    required: false,
  })
  categoria: Categoria;
}
