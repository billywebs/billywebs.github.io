<script lang="ts">
  // Hero — full-bleed intro, tagline, primary CTA scrolling to the contact section.
  function scrollToContact() {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
</script>

<section class="hero" id="top" aria-labelledby="hero-heading">
  <div class="tech-grid" aria-hidden="true"></div>
  <div class="container hero-inner">
    <h1 class="brand">BILLY WEBS</h1>

    <h2 id="hero-heading" class="tagline">
      Beautiful lightweight websites to get
      <span class="accent">customers</span>,
      <br />instead of headaches.
    </h2>

    <p class="lede">
      Lightning-fast sites for local trades and small business. The precision of
      30 years in public-safety software, applied to your phone-first storefront.
    </p>

    <div class="cta-row">
      <button class="cta-primary" onclick={scrollToContact} type="button">
        Let's build it &rarr;
      </button>
      <span class="cta-meta">Flat&nbsp;<strong>$25&nbsp;/&nbsp;month</strong>. No upfront cost.</span>
    </div>
  </div>
</section>

<style>
  .hero {
    min-height: 92vh;
    display: flex;
    align-items: center;
    position: relative;
    background:
      radial-gradient(circle at 20% -10%, rgba(90, 200, 250, 0.15), transparent 60%),
      var(--color-bg);
    border-top: none;
    padding-top: var(--space-12);
    padding-bottom: var(--space-10);
    overflow: hidden;
  }

  /* Make this globally accessible so other sections can reuse it */
  :global(.tech-grid) {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(90, 200, 250, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(90, 200, 250, 0.05) 1px, transparent 1px);
    background-size: 32px 32px;
    background-position: center top;
    mask-image: linear-gradient(to bottom, black 15%, transparent 85%);
    -webkit-mask-image: linear-gradient(to bottom, black 15%, transparent 85%);
    pointer-events: none;
    z-index: 0;
  }

  .hero {
    width: 100%;
    position: relative;
    z-index: 1;
  }

  h1.brand {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: clamp(3.5rem, 10vw, 6rem);
    line-height: 1;
    letter-spacing: -0.04em;
    margin-bottom: var(--space-2);
    color: var(--color-text);
  }

  h2.tagline {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: clamp(1.5rem, 4vw, 2.25rem);
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin-bottom: var(--space-4);
    max-width: 24ch;
    color: var(--color-text-dim);
  }

  h2.tagline .accent {
    color: var(--color-accent);
  }

  .lede {
    font-size: clamp(1rem, 1.4vw, 1.15rem);
    color: var(--color-text-dim);
    max-width: 62ch;
    margin-bottom: var(--space-6);
  }

  .cta-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-3);
  }

  .cta-primary {
    background: var(--color-accent);
    color: #0d1420;
    font-family: var(--font-body);
    font-weight: 700;
    font-size: 1.05rem;
    padding: 12px 28px;
    border: 2px solid var(--color-accent);
    border-radius: 99px;
    box-shadow: 0 4px 14px rgba(90, 200, 250, 0.15);
    transition: all 150ms ease;
  }

  .cta-primary:hover,
  .cta-primary:focus-visible {
    background: transparent;
    color: var(--color-accent);
    box-shadow: 0 6px 20px rgba(90, 200, 250, 0.25);
    transform: translateY(-2px);
  }

  .cta-meta {
    font-family: var(--font-mono);
    color: var(--color-text-dim);
    font-size: 0.9rem;
  }

  .cta-meta strong {
    color: var(--color-text);
    font-weight: 700;
  }

  @media (max-width: 720px) {
    .hero {
      min-height: auto;
      padding-top: var(--space-8);
    }

    h1.brand {
      font-size: clamp(2.5rem, 12vw, 4rem);
    }
  }
</style>
