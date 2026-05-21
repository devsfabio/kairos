import { z } from "zod";

export const SongBodySchema = z.object({
  artist: z.string().min(2, 'O nome do artista precisa que ter 2 ou mais letras'),
  title: z.string().min(2, 'O nome do louvor precisa que ter 2 ou mais letras'),
  url: z.url('URL inválida'),
})
export type SongBody = z.infer<typeof SongBodySchema>;