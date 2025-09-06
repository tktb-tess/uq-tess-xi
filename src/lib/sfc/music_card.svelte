<script lang="ts">
  type Props = {
    title?: string;
    audioPath: string;
  };

  const { title = '', audioPath }: Props = $props();
</script>

<div class="grid bg-white border border-slate-200 rounded-lg">
  <audio src={audioPath}>{title}</audio>
  <h3>{title}</h3>
</div>
