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
        href !== '/' ? (pages.find((d) => d.path === href)?.title ?? '[NO DATA]') : 'Home';
      return { href, title: text } as const;
    });
  });
  const currentText = $derived(pages.find((d) => d.path === path)?.title ?? '[NO DATA]');
</script>

<ol id="breadcrumb" title="パンくずリスト">
  {#each links as { href, title }}
    <li><a {href} {title}>{title}</a></li>
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

      > :where(li:not(:first-child))::before {
        content: '>';
        @apply grid place-content-center;
      }

      :where(a, b) {
        @apply grid place-content-center text-nowrap;
      }
    }
  }
</style>
