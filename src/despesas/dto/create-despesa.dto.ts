import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { Categoria } from 'generated/prisma';

export class CreateDespesaDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsEnum(Categoria)
  categoria: Categoria;

  @IsNotEmpty()
  @IsDate()
  date: Date;
}
