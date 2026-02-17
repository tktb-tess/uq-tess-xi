<script lang="ts">
  interface Props {
    readonly contents: {
      readonly title: string;
      readonly desc: string;
      readonly href: string;
    }[];
  }
  const { contents }: Props = $props();
</script>

<ul class="__card-list">
  {#each contents as { title, desc, href }}
    <li>
      <a {href}>
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
    .__card-list {
      @apply grid grid-cols-[auto_1fr] gap-3 ps-0 list-none w-full max-w-190 mx-auto my-(--s-figure);

      > :where(li) {
        @apply contents;
      }

      :where(a) {
        @apply grid grid-cols-subgrid col-span-full *:min-w-0 items-center
        rounded-sm no-underline gbg-accent h-12 px-3
        any-hover:scale-102 transition-transform;

        > :where(h3, p) {
          @apply ctext-textinv m-0;
        }

        > :where(h3) {
          @apply text-nowrap;
        }
      }
    }
  }
</style>
