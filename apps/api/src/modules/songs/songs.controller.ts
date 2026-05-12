import { Controller, Post, Body } from '@nestjs/common';
import { SongsService } from './songs.service';
import { type SongBody, SongBodySchema } from '@kairos/contracts'

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) { }

  @Post('create-song')
  createSong(@Body() body: SongBody) {
    const parsedBody = SongBodySchema.parse(body);
    this.songsService.createSong(parsedBody);
  }
}
