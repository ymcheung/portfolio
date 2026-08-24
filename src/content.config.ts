import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const pages = defineCollection({
  loader: glob({
    base: './src/content/pages',
    pattern: '**/*.mdoc',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    locale: z.enum(['en', 'zh-Hant-TW']).default('en'),
    path: z.string().optional(),
    ogCover: z.string().default('/home/ogCover.jpg'),
    datePublished: z.string().optional(),
    dateModified: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { pages };
