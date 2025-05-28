import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { Categoria } from '@prisma/client';

export class CreateDespesaDto {
  @IsNotEmpty({ message: 'O título é obrigatório' })
  @IsString()
  title: string;

  @IsNotEmpty({ message: 'O valor é obrigatório' })
  @IsNumber()
  amount: number;

  @IsNotEmpty({ message: 'A categoria é obrigatória' })
  @IsEnum(Categoria)
  categoria: Categoria;

  @IsNotEmpty({ message: 'A data é obrigatória' })
  @IsDate()
  date: Date;
}
