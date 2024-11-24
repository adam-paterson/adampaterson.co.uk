import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.string(),
        excerpt: z.string().optional(),
        tags: z.array(z.string()).optional(),
        image: z.string().optional(),
    }),
});

export const collections = {
    'blog': blog,
};
