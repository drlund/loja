import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProdutoModule } from './produto/produto.module';
import { UsuarioModule } from './usuario/usuario.module';
import { MysqlConfigService } from './config/mysql.config.service';

@Module({
  imports: [
    UsuarioModule,
    ProdutoModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: MysqlConfigService,
      inject: [MysqlConfigService],
    }),
  ],
})
export class AppModule {}
