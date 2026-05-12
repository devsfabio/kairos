import { SongBody } from '@kairos/contracts';
import { Injectable } from '@nestjs/common';
import { Song } from './entities/songs.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song)
    private readonly songRepository: Repository<Song>
  ) { }

  async createSong(song: SongBody) {
    await this.songRepository.save({
      artist: song.artist,
      url: song.url,
      title: song.title
    });
  }
}
