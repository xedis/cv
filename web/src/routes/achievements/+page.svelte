<script lang="ts">

import Language from '../../components/Language.svelte';

const stats = [
  {
    stat: '0 downloads on DockerHub',
    source: 'https://hub.docker.com/u/xedis',
  },
  {
    stat: 'Top 100000000 developer on GitHub',
    source: 'https://gitstar-ranking.com/xedis',
  },
  {
    stat: '0+ wins on global hackathons',
    source: 'https://trillium.xedis.net/',
  },
  {
    stat: 'Top 1000% helper on StackOverflow',
    source: 'https://stackoverflow.com/users/',
  },
  {
    stat: '1+ lines of code written',
    source: 'https://codestats.net/users/xedis',
  },
  {
    stat: '1+ annual unique users across my websites',
    source: 'https://umami.xedis.net',
  },
  {
    stat: '0+ subscribers to developer blog',
    source: 'https://dev.to/xedis',
  },
   {
    stat: '5+ followers on GitHub, X, Dev, LinkedIn etc',
    source: 'https://github.com/xedis',
   },
];

const awards = [
  {
    award: '4x Employee of the Month',
    source: 'DTiQ',
  },
  {
    award: '1x Employee of the Year',
    source: 'DTiQ',
  }
 // {
 //   award: '',
 //   source: '',
 // },
];

//const hackathonWins = [
 // {
 //   line1: 'Won 1st place overall + Network Rail and TFL prizes at Infra-hack, London 2019',
 //   line2: 'Used computer vision to identify incidents and determine station status, in real-time.',
 // },
 // {
 //   line1: 'Won 1st place overall at StartHack, Switzerland 2019',
 //   line2: 'Created Pax, to identify + remove flashes from video footage for photo-sensitive viewers.',
 // },
 // {
 //   line1: 'Won Inteligen Buildings Award (KONE) at Hack Junction, Helsinki 2018',
 //   line2: 'Build Elevate-to-Awesome, an IoT app to track and gamify taking the stairs',
 // },
 // {
 //   line1: 'Won BlockChain Award (SwissCom) at StartHack, Switzerland 2018',
 //   line2: 'Created UNwasted, a social food dapp to reduce waste, on the Ethereum network',
 // },
 // {
 //   line1: 'Won 1st place overall at StartHack, Switzerland 2016',
 //   line2: 'Developed system for real-time sentiment analysis of geographic social media data',
 // },
 // {
 //   line1: 'Won 2nd place at AngelHack and HP sponsor prize Winner, London 2015',
 //   line2: 'Created SmartDepart, an alarm to wake you up earlier if there are delays on your commute',
 // },
 // {
 //   line1: 'Won 2nd place at NBC Universal Comcast hackathon, London 2015',
 //   line2: 'Created an intelligent movie recommendation engine, implemented as Twitter bot',
 // },
 // {
 //   line1: 'Won 1st place as team at HealthHack, London 2015',
 //   line2: 'Build smart watch app for gamifying health tracking',
 // },
 // {
 //   line1: 'Won 2nd place at AngelHack London 2014',
 //   line2: 'Created Anti-Theft Charge, Android app that prevents theft while your device is charging',
 // },
 // {
 //   line1: 'Won 2nd place (and Intelligent Headset main prize), DevLab Live London 2014',
 //   line2: 'Made CityExplorer, interactive tour guide using accelerometers to determine line of site',
 // },
//];

const projects = [
 // {
 //   name: 'Dashy',
 //   description: 'Control panel for self-hosting',
 //   tech: 'Vue',
 //   logo: 'https://dashy.to/img/dashy.png',
 //   stars: '17k',
 //   repo: 'lissy93/dashy',
 //   web: 'https://dashy.to',
 // },
 // {
 //   name: 'Web-Check',
 //   description: 'All-in-one OSINT and security scanner',
 //   tech: 'React',
 //   logo: 'https://v1.web-check.xyz/web-check.png',
 //   stars: '20k',
 //   repo: 'lissy93/web-check',
 //   web: 'https://web-check.xyz',
 // },
 // {
 //   name: 'Digital Defense',
 //   description: 'Ultimate checklist of online security tips',
 //   tech: 'Solid',
 //   logo: 'https://i.ibb.co/Rb6P6h6/shield.png',
 //   stars: '17k',
 //   repo: 'lissy93/personal-security-checklist',
 //   web: 'https://digital-defense.io',
 // },
  {
    name: 'VoidXedis.com',
    description: 'Fully Integrated into several social media platforms and POD distributors',
    tech: 'Shopify',
    logo: '',
    stars: '',
    repo: '',
    web: 'https://voidxedis.com',
  },
  {
    name: 'SD.Next',
    description: 'Diffusion based webui for Stable-diffusion, Klansky, FLUX and countless others',
    tech: 'Python,Pytorch',
    logo: 'https://github.com/vladmandic/automatic/blob/d7264ed2c3be6d0ae9a9c1c1055e91c9e22f06dc/html/favicon.png',
    stars: '1k',
    repo: 'vladmandic/automatic',
    web: 'https://github.com/vladmandic/automatic'
  },
  {
    name: 'DeviantArt Artist',
    description: 'Posting of AI Generated NSFW images for deviants',
    tech: 'API',
    logo: 'https://logos-world.net/wp-content/uploads/2020/11/DeviantArt-Logo.png',
    stars: '4.5k Watchers',
    repo: '',
    web: 'https://www.deviantart.com/x-the-void-x',
  },
];

const normalizeUrl = (url: string) => {
  if (!url) return '';
  return url.replaceAll('https://', '').replaceAll('http://', '');
};

</script>

<svelte:head>	
	<title>Chris Xedis | CV | Achievements</title>
</svelte:head>

<h2>Achievements</h2>

<h3>Stats</h3>
<ul class="stats">
  {#each stats as {stat, source}}
    <li>
      {stat}
      {#if source}
        <a class="source" href={source} target="_blank" rel="nofollow">[Source]</a>
      {/if}
    </li>
  {/each}
</ul>

<hr>

<h3>Awards</h3>
<ul class="awards">
  {#each awards as {award, source}}
    <li>
      {award}
      {#if source}
        <a class="source" href={source} target="_blank" rel="nofollow">[Source]</a>
      {/if}
    </li>
  {/each}
</ul>

<hr>

<!--<h3>Hackathons</h3>
<ul class="hackathons">
  {#each hackathonWins as win}
    <li>
      <p class="line1">{win.line1}</p>
      <p class="line2">{win.line2}</p>
    </li>
  {/each}
</ul>
-->
<hr>

<h3>Flagship Projects</h3>
<ul class="projects">
  {#each projects as project}
    <li>
      <p class="top-line">
        <img src={project.logo} alt={''} width="20">
        <strong>
          <a href={project.web}>{project.name}</a>
        </strong>
        <span class="desc"> 
          - {project.description}
          <span title="GitHub Star Count">
        </span>
      </p>
      <span class="project-stats">
        <Language language={project.tech} small={true} />
        |
        <a
          title={`View ${project.repo.split('/')[1]} on GitHub`}
          href={`https://github.com/${project.repo}`}>
          <i class="fa-brands fa-github"></i> {project.repo}
        </a>
        | 
        <a title={`View ${project.name}'s homepage`} href={project.web}>
          <i class="fa-solid fa-globe"></i> {normalizeUrl(project.web)}
        </a>
        |
        <span title="GitHub Star Count"><i class="fa-solid fa-star"></i> Star Count: {project.stars}</span>
      </span>
    </li>
  {/each}
</ul>


<p class="projects-more">
  The above list is some stuff I contribute to or attempted to grow as a social media presence, for a time I thought I could make a side hustle out of AI generated art, 
  I really do enjoy making it. 
  I also have an AWS Organization I've built out for a side project that hasn't hit the public yet. <a href="https://voidxedis.awsapps.com/start/#/">VoidXedis AWS SSO</a>
  <br><br>
  I'm good at learning new tech, you can see some of my homelab @ <a href="https://dashy.xedis.net/home/homelab">dashy.xedis.net</a>.
</p> 

<style lang="scss">
  h2 {
    font-size: 1.8rem;
    text-align: center;
    font-weight: 500;
  }
  h3 {
    margin: 1rem 0 0.5rem;
  }
  p, a, li, span, div {
    font-size: 0.9rem;
  }
  ul {
    margin: 0;
    padding-left: 1.5rem;
  }
  hr {
    margin: 1rem 0;
    opacity: 0.8;
  }
  .source {
    font-size: 0.65rem;
    opacity: 0.65;
    margin-left: 2px;
    &:hover {
      opacity: 1;
    }
  }
  .hackathons {
    li p {
      margin: 0;
    }
    .line1 {
      font-weight: 500;
    }
    .line2 {
      font-style: italic;
      opacity: 0.8;
    }
  }

  .projects {
    padding-left: 0.5rem;
    li {
      list-style: none;
      .top-line {
        margin: 0;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex-wrap: wrap;
      }
      strong {
        font-weight: 500;
        display: inline-flex;
        gap: 0.5rem;
        justify-content: center;
        align-items: center;
        a {

        }
      }
      i {
        font-size: 0.8rem;
      }
      .desc {
        font-style: italic;
        font-weight: 500;
      }
      a {
        color: var(--text-color);
        &:hover {
          color: var(--primary);
        }
      }
      .project-stats {
        margin-left: 1rem;
        font-size: 0.8rem;
        opacity: 0.8;
        a {
          opacity: 0.8;
        }
      }
    }
  }

  .projects-more {
    opacity: 0.8;
    font-style: italic;
  }
</style>
