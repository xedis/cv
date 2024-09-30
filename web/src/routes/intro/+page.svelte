<script>
  	const navLinks = [
      { name: 'Experience', url: '/experience', icon: 'fa-briefcase' },
      { name: 'Achievements', url: '/achievements', icon: 'fa-star' },
      { name: 'Skills', url: '/skills', icon: 'fa-code' },
      { name: 'Contact', url: '/contact', icon: 'fa-paper-plane' },
    ];

    const tagline = 'A flexible Jack of All, Master of Whatever I`m working on.';

    const intro = [

      `Jeeze Alicia, you make me feel like I've just been sitting around`,
    ];
</script>

<svelte:head>	
	<title>Chris Xedis | CV | Intro</title>
</svelte:head>

<h1>Intro</h1>

{#each intro as paragraph}
  <p>{paragraph}</p>
{/each}

<div class="other-pages">
{#each navLinks as { name, url, icon }}
  <a href={url} class="no-underline">
    <button class="big-btn"><i class="fa-solid {icon}"></i>{name}</button>
  </a>
{/each}
</div>

<style lang="scss">
.other-pages {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 1rem;
  a {
    button {
      margin: 0;
      font-size: 1rem;
      padding: 0.5rem 0.5rem;
    }
  }
}
</style>
