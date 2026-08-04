import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const works = defineCollection({
  // Astro 5のglob loaderで、作品を1ファイルずつ追加できる構造にする。
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    repo: z.string().url(),
    demo: z.string().url().optional(),
    thumbnail: z.string().optional(),
    summary: z.string(),
  }),
});

export const collections = { works };
