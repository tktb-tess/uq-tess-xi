import * as z from 'zod';

export const schema = z.object({
  colorScheme: z.union([z.literal('default'), z.literal('light'), z.literal('dark')]),
});

export type SiteConfig = z.infer<typeof schema>;

export const key = 'site-config';

export const siteConfig: SiteConfig = $state({
  colorScheme: 'default',
});
