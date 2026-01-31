

export type SiteConfig = {
  colorScheme: 'default' | 'light' | 'dark';
};

export const key = 'site-config';

export const siteConfig: SiteConfig = $state({
  colorScheme: 'default',
});
