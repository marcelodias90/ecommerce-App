import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsuarioAppModule } from './usuario/usuario.app.module';
import { EnderecoModule } from './endereco/endereco.modules';
import { PagamentoModule } from './pagamento/pagamento.modules';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env']
    }),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) || 1433,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [`${__dirname}/**/*.entity{.ts,*.js}`],
      migrations: [`${__dirname}/migration/{.ts,*.js}`],
      migrationsRun: true,
      extra: {
        trustServerCertificate: true,
      }
    }),
    UsuarioAppModule,
    EnderecoModule,
    PagamentoModule
  ],

})
export class AppModule { }
