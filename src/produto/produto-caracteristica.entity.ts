import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'produto_caracteristicas' })
export class ProdutoCaracteristica {
  @PrimaryColumn({ name: 'url', length: 100, nullable: false })
  nome: string;

  @Column({ name: 'descricao', length: 255, nullable: false })
  descricao: string;
}
