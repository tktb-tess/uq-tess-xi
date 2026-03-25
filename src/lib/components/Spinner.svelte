<script lang="ts">
  interface Props {
    readonly text?: string;
    readonly stop?: boolean;
    readonly size?: number;
  }
  const { text = '読み込み中……', stop = false, size: s_ }: Props = $props();
  const size = $derived(s_ != null ? `calc(var(--spacing) * ${s_})` : null);
</script>

<div class="spinner">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    data-stop={stop || null}
    style:--spinner-size={size}
  >
    <!-- Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
    <path
      fill="currentColor"
      d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"
    />
  </svg>
  <p>{text}</p>
</div>

<style lang="postcss">
  @reference '../../app.css';
  @layer components {
    .spinner {
      @apply flex items-center-safe gap-4;
    }

    .spinner > svg:not([data-stop]) {
      @apply animate-spin size-(--spinner-size,--spacing(6)) inline-block;
    }

    p {
      @apply mt-0;
    }
  }
</style>
