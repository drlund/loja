import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'produto_imagens' })
export class ProdutoImagem {
  // @Column({ name: 'url', length: 100, nullable: false })
  @PrimaryColumn({ name: 'url', length: 100, nullable: false })
  url: string;

  @Column({ name: 'descricao', length: 255, nullable: false })
  descricao: string;
}
