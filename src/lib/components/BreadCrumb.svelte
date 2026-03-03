<script lang="ts">
  import pages from '../modules/pages';
  import HomeIcon from '../icons/HomeIcon.svelte';
  interface Props {
    readonly path: string;
  }
  const { path }: Props = $props();
  const links = $derived.by(() => {
    const dirs = path.split('/').filter((d) => d !== '');

    return dirs.map((_, i) => {
      const href = `/${dirs.slice(0, i).join('/')}`;
      const text = href !== '/' ? (pages.find((d) => d.path === href)?.title ?? '[NO DATA]') : null;
      return { href, title: text } as const;
    });
  });
  const currentText = $derived(pages.find((d) => d.path === path)?.title ?? '[NO DATA]');
</script>

<nav class="breadcrumb" aria-label="パンくずリスト">
  <ol class="breadcrumb-list">
    {#each links as { href, title }}
      {#if title == null}
        <li>
          <a {href} title="Home">
            <HomeIcon class="w-4 h-auto" />
          </a>
        </li>
      {:else}
        <li><a {href} {title}>{title}</a></li>
      {/if}
    {/each}
    <li><a id="current" aria-current="page" tabindex="-1">{currentText}</a></li>
  </ol>
</nav>

<style lang="postcss">
  @reference '../../app.css';
  @layer components {
    .breadcrumb {
      @apply my-paragraph;
    }
    .breadcrumb-list {
      @apply p-0 m-0 list-none flex gap-2 flex-wrap;

      > :where(li) {
        @apply contents;
      }

      > :where(li:not(:first-child))::before {
        content: '>';
        @apply leading-none;
      }

      :where(a) {
        @apply leading-none;
      }

      :where(a[aria-current='page']) {
        @apply font-semibold;
      }
    }
  }
</style>
