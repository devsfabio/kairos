import { submitSong } from '@/services/songs.service';
import { useMutation } from '@tanstack/react-query';

export function useSong() {
  return useMutation({
    mutationFn: submitSong,
  });
}
