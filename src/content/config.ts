import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.string(),
        description: z.string().optional(),
        excerpt: z.string().optional(),
        tags: z.array(z.string()).optional(),
        image: z.string().optional(),
        updateDate: z.string().optional(),
    }),
});

export const collections = {
    'blog': blog,
};
