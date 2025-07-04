<script lang="ts">
	const ogTitle = '音楽',
		ogDesc = '作曲は楽しい';

	const loadMusics = async () => {
		const musicUrl = ['/music/welcome.m4a', '/music/celeste.m4a'];
		const promises = musicUrl.map(async (url) => {
			const resp = await fetch(url);
			if (!resp.ok) throw Error('failed to fetch');
			return resp.blob();
		});

		return Promise.all(promises);
	};
</script>

<svelte:head>
	<meta name="description" content={ogDesc} />
	<!-- OGP -->
	<meta property="og:title" content="{ogTitle} - 悠久肆方体" />
	<meta property="og:description" content={ogDesc} />
	<!-- twitter card -->
	<meta name="twitter:title" content="{ogTitle} - 悠久肆方体" />
	<meta name="twitter:description" content={ogDesc} />
	<title>{ogTitle} - 悠久肆方体</title>
</svelte:head>

<h2 class="my-8 text-center">音楽</h2>
