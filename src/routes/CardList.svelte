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

<div class="__card-list">
  {#each contents as { title, desc, href }}
    <a {href}>
      <h3>{title}</h3>
      <p>
        {desc}
      </p>
    </a>
  {/each}
</div>

<style lang="postcss">
  @reference '../../app.css';
  @layer components {
    .__card-list {
      @apply flex flex-col gap-3 w-full max-w-190 mx-auto my-(--s-figure);

      > :where(a) {
        @apply grid grid-cols-[8.75rem_1fr] *:min-w-0 items-center
        rounded-sm no-underline px-4 py-2 gbg-accent
        scale-98 any-hover:scale-100 transition-transform;

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
