import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

const reubens = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reubens' }),
  schema: ({ image }) =>
    z.object({
      restaurant: z.string(),
      website: z.string().url(),
      item: z.string(),
      sides: z.string().optional(),
      stars: z.number(),
      imageThumbnail: image(),
      price: z.number(),
      closed: z.boolean().optional(),
    }),
});

export const collections = { reubens };
