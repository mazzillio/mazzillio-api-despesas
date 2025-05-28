import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

export class ListDespesasDto {
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
}
