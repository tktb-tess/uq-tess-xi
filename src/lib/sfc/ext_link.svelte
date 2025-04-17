<script lang="ts">
    import ExtLinkIcon from "./ext_link_icon.svelte";
    type Props = {
        href: string;
        text: string;
    };
    const { href, text }: Props = $props();
</script>

<a href={href} target="_blank" rel="noreferrer">{text} <ExtLinkIcon /></a>
