import { submitSong } from '@/services/songs.service';
import { useMutation } from '@tanstack/react-query';

export function useSong() {
  useMutation({
    mutationFn: submitSong,
  });
}
