<script lang="ts">
  import { resolve } from '$app/paths';

  interface Props {
    readonly contents: {
      readonly title: string;
      readonly desc: string;
      readonly href: '/conlang' | '/data' | '/others';
    }[];
  }
  const { contents }: Props = $props();
</script>

<ul class="card-list">
  {#each contents as { title, desc, href } (`${title}-${desc}-${href}`)}
    <li>
      <a href={resolve(href)}>
        <h3>{title}</h3>
        <p>
          {desc}
        </p>
      </a>
    </li>
  {/each}
</ul>

<style lang="postcss">
  @reference '../app.css';
  @layer components {
    .card-list {
      @apply grid grid-cols-[auto_1fr] gap-3 ps-0 list-none w-full max-w-190 mx-auto my-figure;

      > :where(li) {
        @apply contents;
      }

      :where(a) {
        @apply grid grid-cols-subgrid col-span-full *:min-w-0 items-center
        rounded-sm no-underline px-4 py-3
        hover-focus:scale-102 transition-transform
        bg-linear-to-b from-card-list-s to-card-list-e;

        > :where(h3, p) {
          @apply text-textinv m-0 leading-none;
        }

        > :where(h3) {
          @apply text-nowrap pb-0.5;
        }
      }
    }
  }
</style>
