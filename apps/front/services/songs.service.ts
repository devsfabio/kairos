import { SongBody } from '@kairos/contracts';

export async function submitSong(songBody: SongBody) {
  const response = await fetch('http://localhost:4000/songs/create-song', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(songBody),
  });
  if (!response.ok) {
    throw new Error('Failed to submit song');
  }
  return response.json();
}
