import { z } from "zod";

export const SongBodySchema = z.object({
  artist: z.string().min(2),
  title: z.string().min(2),
  url: z.url(),
})
export type SongBody = z.infer<typeof SongBodySchema>;