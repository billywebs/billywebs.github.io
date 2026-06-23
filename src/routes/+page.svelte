<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import Portfolio from '$lib/components/Portfolio.svelte';
  import Process from '$lib/components/Process.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>Billy Webs — Lightning-fast websites for trades &amp; small business</title>
</svelte:head>

<main>
  <Hero />
  <Portfolio />
  <Process />
  <Contact />
</main>
<Footer />
