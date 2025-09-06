import z from 'zod';

export const siteConfigSchema = z.object({
  colorScheme: z.union([z.literal('light'), z.literal('dark')]),
});

export type SiteConfig = z.infer<typeof siteConfigSchema>;

export const key = 'site-config';

const init = (() => {
  if (typeof window !== 'undefined') {
    const v = localStorage.getItem(key);
    // console.log(v);
    if (!v) return null;
    const r = siteConfigSchema.safeParse(JSON.parse(v));
    return r.success ? r.data : null;
  }
  return null;
})();

export const siteConfig: SiteConfig = $state(
  init ?? {
    colorScheme: 'light',
  },
);
