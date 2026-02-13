<script lang="ts">
  import pages from '../modules/pages';
  interface Props {
    readonly path: string;
  }
  const { path }: Props = $props();
  const links = $derived.by(() => {
    const dirs = path.split('/').filter((d) => d !== '');

    return dirs.map((_, i) => {
      const href = `/${dirs.slice(0, i).join('/')}`;
      const text =
        href !== '/' ? (pages.find((d) => d.path === href)?.title ?? '[NO DATA]') : 'Top';
      return { href, text } as const;
    });
  });
  const currentText = $derived(pages.find((d) => d.path === path)?.title ?? '[NO DATA]');
</script>

<ol id="breadcrumb" aria-label="パンくずリスト">
  {#each links as link}
    <li><a href={link.href}>{link.text}</a></li>
  {/each}
  <li><b>{currentText}</b></li>
</ol>

<style lang="postcss">
  @reference '../../app.css';
  @layer components {
    #breadcrumb {
      @apply ps-0 list-none flex gap-2 flex-wrap;

      > :where(li) {
        @apply contents;
      }

      > :where(li:not(:last-child))::after {
        content: '>';
        @apply block;
      }

      :where(a, b) {
        @apply block text-nowrap;
      }
    }
  }
</style>
