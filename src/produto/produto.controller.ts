import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { AtualizaProdutoDTO } from './dto/atualizaProduto.dto';
import { CriaProdutoDTO } from './dto/CriarProduto.dto';
import { ProdutoRepository } from './produto.repository';
import { ProdutoEntity } from './produto.entity';

@Controller('produtos')
export class ProdutoController {
  constructor(private readonly produtoRepository: ProdutoRepository) {}

  @Post()
  async criaNovo(@Body() dadosProduto: CriaProdutoDTO) {
    const produto = new ProdutoEntity();

    produto.id = dadosProduto.usuarioId;
    produto.nome = dadosProduto.nome;
    produto.usuarioId = dadosProduto.usuarioId;
    produto.valor = dadosProduto.valor;
    produto.quantidade = dadosProduto.quantidade;
    produto.descricao = dadosProduto.descricao;
    produto.categoria = dadosProduto.categoria;
    // produto.caracteristicas = dadosProduto.caracteristicas;
    // produto.imagens = dadosProduto.imagens;

    const produtoCadastrado = this.produtoRepository.salva(produto);
    return produtoCadastrado;
  }

  @Get()
  async listaTodos() {
    return this.produtoRepository.listaTodos();
  }

  @Put('/:id')
  async atualiza(
    @Param('id') id: number,
    @Body() dadosProduto: AtualizaProdutoDTO,
  ) {
    const produtoAlterado = await this.produtoRepository.atualiza(
      id,
      dadosProduto,
    );

    return {
      mensagem: 'produto atualizado com sucesso',
      produto: produtoAlterado,
    };
  }

  @Delete('/:id')
  async remove(@Param('id') id: number) {
    const produtoRemovido = await this.produtoRepository.remove(id);

    return {
      mensagem: 'produto removido com sucesso',
      produto: produtoRemovido,
    };
  }
}
