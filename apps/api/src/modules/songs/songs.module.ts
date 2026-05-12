import { Module } from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongsController } from './songs.controller';
import { Song } from './entities/songs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [SongsController],
  providers: [SongsService],
  imports: [
    TypeOrmModule.forFeature([
      Song
    ])
  ]
})
export class SongsModule { }
