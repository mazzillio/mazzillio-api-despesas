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
  UseInterceptors,
} from '@nestjs/common';
import { DespesasService } from './despesas.service';
import { CreateDespesaDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';
import { ListDespesasDto } from './dto/list-depesas.dto';
import { ResponseDespesaDto } from './dto/response-despesa.dto';
import {
  ApiCreateDespesa,
  ApiUpdateDespesa,
  ApiGetDespesa,
  ApiListDespesas,
  ApiDeleteDespesa,
} from './decorators/swagger.decorator';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('despesas')
export class DespesasController {
  constructor(private readonly despesasService: DespesasService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiCreateDespesa()
  async create(@Body() createDespesaDto: CreateDespesaDto) {
    const despesa = await this.despesasService.create(createDespesaDto);
    return new ResponseDespesaDto(despesa);
  }

  @Get()
  @ApiListDespesas()
  @UseInterceptors(CacheInterceptor)
  async findAll(@Query() listDespesasDto: ListDespesasDto) {
    const despesas = await this.despesasService.findAll(listDespesasDto);
    return despesas.map((despesa) => new ResponseDespesaDto(despesa));
  }

  @Get(':id')
  @ApiGetDespesa()
  async findOne(@Param('id') id: string) {
    const despesa = await this.despesasService.findOne(id);
    return new ResponseDespesaDto(despesa);
  }

  @Patch(':id')
  @ApiUpdateDespesa()
  async update(
    @Param('id') id: string,
    @Body() updateDespesaDto: UpdateDespesaDto,
  ) {
    const despesa = await this.despesasService.update(id, updateDespesaDto);
    return new ResponseDespesaDto(despesa);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiDeleteDespesa()
  async remove(@Param('id') id: string) {
    await this.despesasService.remove(id);
  }
}
