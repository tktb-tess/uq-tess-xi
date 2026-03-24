import * as z from 'zod';

export const schema = z.object({
  colorScheme: z.literal(['light dark', 'light', 'dark']),
});

export type SiteConfig = z.infer<typeof schema>;

export const key = 'site-config';

export const siteConfig: SiteConfig = $state({
  colorScheme: 'light dark',
});
