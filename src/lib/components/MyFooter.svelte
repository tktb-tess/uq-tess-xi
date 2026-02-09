<script lang="ts">
  import ExtLink from './ExtLink.svelte';
  import GitHubIcon from './GitHubIcon.svelte';
  interface Props {
    class?: string;
  }
  const { class: cName }: Props = $props();
</script>

<footer class={cName}>
  <p>
    ※当サイトで紹介・解説されている言語や文化などは、一部の解説中に出てきたものを除き、すべて著者の創作です。実在は一切しませんのでお気を付けください。
  </p>
  <p>© 2024-2026 Tessyrrhaqt / 斗琴庭暁響</p>
  <div>
    <ExtLink
      href="https://github.com/tktb-tess/uq-tess-xi"
      title="Link to the GitHub Repository"
      class="any-hover:opacity-60 transition-opacity"
      noIcon
    >
      <GitHubIcon class="size-6 inline-block" />
    </ExtLink>
  </div>
</footer>

<style lang="postcss">
  @reference '../../app.css';
  @layer components {
    footer {
      @apply my-(--s-paragraph) text-center;

      > div {
        @apply mt-(--s-paragraph);
      }
    }
  }
</style>
