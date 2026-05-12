import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './db/datasource';
import { ConfigModule } from '@nestjs/config';
import { SongsModule } from './modules/songs/songs.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(dataSourceOptions),
    SongsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
