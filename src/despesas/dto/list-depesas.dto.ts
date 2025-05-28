import { Categoria } from '@prisma/client';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

export class ListDespesasDto {
  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsNumber()
  month: number;

  @IsOptional()
  @IsNumber()
  year: number;

  @IsOptional()
  @IsEnum(Categoria)
  categoria: Categoria;
}
