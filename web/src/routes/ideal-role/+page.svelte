<script>
  const navLinks = [
    { name: 'Intro', url: '/intro', icon: 'fa-address-card' },
    { name: 'Experience', url: '/experience', icon: 'fa-briefcase' },
    { name: 'Achievements', url: '/achievements', icon: 'fa-star' },
    { name: 'Skills', url: '/skills', icon: 'fa-code' },
  ];

  const intro = [
    `I'm looking for a role that will leverage all the skills I have developed thus far and those I've yet to master. 
    I enjoy complex and convoluted challenges where actions have subtle and nuanced impact, where the results might not come to light
    immediately and are often otherwise overlooked. I enjoy travelling the road not yet travelled, paving the way in freshly fallen snow or an unexplored route.
    I'm not great at following the path laid before me and I will often jump off it in search of a more optimized route (time permitting of course). I like to utilize 
    the efforts of those who came before me and try to enhance it for the benefit of all. I prefer to not be the leader, yet have taken up the mantle when asked to.
    I'm vocal and when I oppose an idea I always provide the why for discussion. I love being right, I love being wrong. `
  ];

  const requirements = [
    { lbl: 'Location', desc: 'Las Vegas' },
    { lbl: 'Contract Type', desc: 'Permanent, and ideally full-time' },
    { lbl: 'Workspace', desc: 'Remote working is great, but it`s not for everyone as such Im willing to travel some, I do enjoy team meetups and trips to random locales if needed' },
    { lbl: 'Seniority', desc: 'Engineer, Architect, experienced with a broad attack surface' },
    { lbl: 'Discipline', desc: 'Security' },
    { lbl: 'Industry', desc: 'Any, they all need Security' },
    { lbl: 'Comp', desc: 'Competitive salary, but I can and will be flexible on this for the right role' },
  ];

  const values = [
    'Values quality and good security standards',
    'Dedicated to org happiness',
    'Investing in juniors and fostering growth',
    'Developing customer-focused products',
    'Appreciates the value of open source and gives back regularly',
    'Innovative, and an openness to trying new things',
  ];
</script>

<svelte:head>	
	<title>Chris Xedis | CV | Ideal Role</title>
</svelte:head>

<h1>What I'm looking for</h1>

{#each intro as paragraph}
<p>{paragraph}</p>
{/each}

<h2>Values</h2>
<p class="subtitle">I'm looking for a company which has the following core values</p>
<ul>
  {#each values as value}
    <li>{value}</li>
  {/each}
</ul>


<h2>Requirements</h2>
<p class="subtitle">I'm pretty flexible on the details, but ideally looking to work within these parameters</p>
<ul>
  {#each requirements as { lbl, desc }}
    <li>
      <strong>{lbl}:</strong> {desc}
    </li>
  {/each}
</ul>



<h2>Why me?</h2>
<p>
  I'm pretty awesome, just take a look at my recent <a href="/achievements">achievements</a> for evidence of this! 
  You can learn more about me, my attributes and the philosophy that drives me in my <a href="/intro">intro</a> page.
  Or if you prefer to see some of the stuff I've been setting up <a href="https://dashy.xedis.net">dashy.xedis.net</a>
</p>

<h2>Get in Touch</h2>
<p>
  Does this sound good to you? If so, I'd love to hear from you! So please do <a href="/contact">get in touch</a>.
</p>

<div class="other-pages">
  {#each navLinks as { name, url, icon }}
    <a href={url} class="no-underline">
      <button class="big-btn"><i class="fa-solid {icon}"></i>{name}</button>
    </a>
  {/each}
</div>

<style lang="scss">

h2 {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 2rem 0 0.5rem 0;
}

.subtitle {
  margin: 0 0 0.5rem 0;
  font-size: 0.8rem;
  font-style: italic;
  opacity: 0.8;
}

ul {
  margin: 0;
  padding-left: 1rem;
  font-size: 1rem;
  li {
    strong {
      font-weight: 600;
    }
  }
}

p {
  font-size: 1rem;
  margin: 0 0 0.5rem 0;
}

.other-pages {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
  a {
    button {
      margin: 0;
      font-size: 1rem;
      padding: 0.5rem 0.5rem;
    }
  }
}
</style>
