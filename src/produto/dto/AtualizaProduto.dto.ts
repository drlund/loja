import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { CaracteristicaProdutoDTO, ImagemProdutoDTO } from './CriarProduto.dto';

export class AtualizaProdutoDTO {
  @IsNumber(undefined, { message: 'ID do produto inválido' })
  id: number;

  @IsNumber(undefined, { message: 'ID de usuário inválido' })
  usuarioId: number;

  @IsString()
  @IsNotEmpty({ message: 'Nome do produto não pode ser vazio' })
  @IsOptional()
  nome: string;

  @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
  @IsOptional()
  @Min(1, { message: 'O valor precisa ser maior que zero' })
  @IsOptional()
  valor: number;

  @IsNumber()
  @Min(0, { message: 'Quantidade mínima inválida' })
  @IsOptional()
  quantidadeDisponivel: number;

  @IsString()
  @IsOptional()
  descricao: string;

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(3)
  @Type(() => CaracteristicaProdutoDTO)
  @IsOptional()
  caracteristicas: CaracteristicaProdutoDTO[];

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => ImagemProdutoDTO)
  @IsOptional()
  imagens: ImagemProdutoDTO[];

  @IsString()
  @IsNotEmpty({ message: 'Categoria do produto não pode ser vazia' })
  @IsOptional()
  categoria: string;
}
