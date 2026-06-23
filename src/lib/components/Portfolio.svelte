<script lang="ts">
  import { portfolio } from '$lib/data/portfolio';
</script>

<section class="section portfolio" id="portfolio" aria-labelledby="portfolio-heading">
  <div class="tech-grid" aria-hidden="true"></div>
  <div class="container container-relative">
    <h2 id="portfolio-heading">
      Recent <span class="accent">builds.</span>
    </h2>
    <p class="intro">High-performance, mobile-first. Same solid foundation, every time.</p>

    <ul class="grid" role="list">
      {#each portfolio as item, i (item.title)}
        <li class="card" class:card-featured={i === 0}>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            class="card-link"
            aria-label={`Open ${item.title} in a new tab`}
          >
            <div class="thumb" aria-hidden="true">
              {#if item.image}
                <img src={item.image} alt="" loading="lazy" />
              {:else}
                <div class="thumb-placeholder">
                  <span>{item.title}</span>
                </div>
              {/if}
            </div>
            <div class="card-body">
              {#if item.tag}
                <span class="tag">{item.tag}</span>
              {/if}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span class="visit">Visit site &rarr;</span>
            </div>
          </a>
        </li>
      {/each}
    </ul>
  </div>
</section>

<style>
  /* Give the section relative positioning to contain the absolute tech-grid */
  .portfolio {
    position: relative;
    overflow: hidden;
  }

  .container-relative {
    position: relative;
    z-index: 1;
  }

  .intro {
    color: var(--color-text-dim);
    margin-bottom: var(--space-6);
  }

  .grid {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }

  /* Bento: featured card spans 2 rows on the left; two smaller stack on right */
  @media (min-width: 800px) {
    .grid {
      grid-template-columns: 1.4fr 1fr;
      grid-auto-rows: 1fr;
    }

    .card-featured {
      grid-row: span 2;
    }

    .card-featured .thumb {
      aspect-ratio: 4 / 3.5;
    }
  }

  .card {
    background: transparent;
    border: none;
    transition: transform 200ms ease;
  }

  .card-link {
    display: flex;
    flex-direction: column;
    color: inherit;
    text-decoration: none;
    height: 100%;
    gap: var(--space-2);
  }

  .thumb {
    aspect-ratio: 16 / 10;
    background: var(--color-bg-alt);
    border: 1px solid var(--color-border);
    overflow: hidden;
    transition: border-color 200ms ease;
  }

  .card:hover .thumb,
  .card:focus-within .thumb {
    border-color: var(--color-accent);
  }

  .card:hover {
    transform: translateY(-3px);
  }

  .thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .thumb-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background:
      repeating-linear-gradient(
        45deg,
        #131a28 0 12px,
        #1a2336 12px 24px
      );
    color: var(--color-text-dim);
    font-family: var(--font-mono);
    font-size: 0.85rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: var(--space-3);
    text-align: center;
  }

  .card-body {
    padding-top: var(--space-1);
  }

  .tag {
    display: inline-block;
    font-family: var(--font-mono);
    font-size: 0.68rem;
    letter-spacing: 0.14em;
    color: var(--color-accent);
    margin-bottom: var(--space-1);
    text-transform: uppercase;
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 4px;
    transition: color 160ms ease;
  }

  .card:hover h3 {
    color: var(--color-accent);
  }

  .card-body p {
    color: var(--color-text-dim);
    font-size: 0.92rem;
    margin-bottom: var(--space-1);
  }

  .visit {
    font-family: var(--font-mono);
    font-size: 0.82rem;
    color: var(--color-accent);
  }

  .card-featured h3 {
    font-size: 1.35rem;
  }

  .card-featured .card-body p {
    font-size: 1rem;
  }
</style>
