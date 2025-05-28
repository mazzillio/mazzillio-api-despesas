import { applyDecorators } from '@nestjs/common';
import { ApiCreatedResponse, ApiResponse } from '@nestjs/swagger';
import { ResponseDespesaDto } from '../dto/response-despesa.dto';

export const ApiCreateDespesa = () => {
  return applyDecorators(
    ApiCreatedResponse({
      description: 'Despesa criada com sucesso',
      type: ResponseDespesaDto,
    }),
    ApiResponse({
      status: 400,
      description: 'Despesa já existe',
    }),
    ApiResponse({
      status: 400,
      description: 'Dados inválidos',
    }),
  );
};

export const ApiUpdateDespesa = () => {
  return applyDecorators(
    ApiResponse({
      status: 200,
      description: 'Despesa atualizada com sucesso',
      type: ResponseDespesaDto,
    }),
    ApiResponse({
      status: 404,
      description: 'Despesa não encontrada',
    }),
    ApiResponse({
      status: 400,
      description: 'Dados inválidos',
    }),
  );
};

export const ApiGetDespesa = () => {
  return applyDecorators(
    ApiResponse({
      status: 200,
      description: 'Despesa encontrada com sucesso',
      type: ResponseDespesaDto,
    }),
    ApiResponse({
      status: 404,
      description: 'Despesa não encontrada',
    }),
  );
};

export const ApiListDespesas = () => {
  return applyDecorators(
    ApiResponse({
      status: 200,
      description: 'Lista de despesas retornada com sucesso',
      type: [ResponseDespesaDto],
    }),
    ApiResponse({
      status: 400,
      description: 'Dados inválidos',
    }),
  );
};

export const ApiDeleteDespesa = () => {
  return applyDecorators(
    ApiResponse({
      status: 204,
      description: 'Despesa removida com sucesso',
    }),
    ApiResponse({
      status: 404,
      description: 'Despesa não encontrada',
    }),
  );
};
