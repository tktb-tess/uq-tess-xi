<script lang="ts">
  import GitHubIcon from '../icons/GitHubIcon.svelte';
  interface Props {
    class?: string;
  }
  const { class: cName }: Props = $props();
</script>

<div class="__footer {cName}">
  <p>
    ※当サイトで紹介・解説されている言語や文化などは、一部の解説中に出てきたものを除き、すべて著者の創作です。実在は一切しませんのでお気を付けください。
  </p>
  <p>© 2024-2026 Tessyrrhaqt / 斗琴庭暁響</p>
  <div class="github-link">
    <a
      href="https://github.com/tktb-tess/uq-tess-xi"
      title="Link to the GitHub Repository"
      target="_blank"
    >
      <GitHubIcon />
    </a>
  </div>
</div>

<style lang="postcss">
  @reference '../../app.css';
  @layer components {
    .__footer {
      @apply my-paragraph text-center break-keep px-gutter;

      > .github-link {
        @apply mt-paragraph flex justify-center-safe;

        > a {
          @apply hover-focus:opacity-60 transition-opacity;
        }
      }
    }
  }
</style>
