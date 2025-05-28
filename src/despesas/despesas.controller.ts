import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { DespesasService } from './despesas.service';
import { CreateDespesaDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';
import { ListDespesasDto } from './dto/list-depesas.dto';
import { ResponseDespesaDto } from './dto/response-despesa.dto';
import { ApiCreatedResponse, ApiResponse } from '@nestjs/swagger';

@Controller('despesas')
export class DespesasController {
  constructor(private readonly despesasService: DespesasService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({
    description: 'Despesa criada com sucesso',
    type: ResponseDespesaDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Despesa não encontrada',
  })
  async create(@Body() createDespesaDto: CreateDespesaDto) {
    const despesa = await this.despesasService.create(createDespesaDto);
    return new ResponseDespesaDto(despesa);
  }

  @Get()
  async findAll(@Query() listDespesasDto: ListDespesasDto) {
    const despesas = await this.despesasService.findAll(listDespesasDto);
    return despesas.map((despesa) => new ResponseDespesaDto(despesa));
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const despesa = await this.despesasService.findOne(id);
    return new ResponseDespesaDto(despesa);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDespesaDto: UpdateDespesaDto) {
    return this.despesasService.update(id, updateDespesaDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    await this.despesasService.remove(id);
  }
}
