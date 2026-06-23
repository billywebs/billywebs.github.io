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
    <div class="content">
      <h1 class="brand">BILLY WEBS</h1>

      <h2 id="hero-heading" class="tagline">
        Weave your <span class="accent">web(site)</span>.
        <br />Catch more leads.
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

    <div class="visual" aria-hidden="true">
      <div class="poly-web">
        <svg viewBox="0 0 200 200">
          <g class="spin-group">
            <!-- Hexagons -->
            <polygon points="100,10 178,55 178,145 100,190 22,145 22,55" class="hex h1"/>
            <polygon points="100,30 160,65 160,135 100,170 40,135 40,65" class="hex h2"/>
            <polygon points="100,50 143,75 143,125 100,150 57,125 57,75" class="hex h3"/>
            <polygon points="100,70 126,85 126,115 100,130 74,115 74,85" class="hex h4"/>
            <!-- Spokes -->
            <line x1="100" y1="10" x2="100" y2="190" class="spoke" />
            <line x1="22" y1="55" x2="178" y2="145" class="spoke" />
            <line x1="22" y1="145" x2="178" y2="55" class="spoke" />
          </g>
        </svg>
        <div class="core-glow"></div>
        
        <!-- Interactive Nodes -->
        <div class="buzz-node node-1">
          <div class="buzz-tooltip">Lightning-fast</div>
        </div>
        <div class="buzz-node node-2">
          <div class="buzz-tooltip">Highly reliable</div>
        </div>
        <div class="buzz-node node-3">
          <div class="buzz-tooltip">Pixel-perfect</div>
        </div>
        <div class="buzz-node node-4">
          <div class="buzz-tooltip">SEO optimized</div>
        </div>
      </div>
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

  .hero-inner {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: var(--space-8);
    align-items: center;
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
  }

  .visual {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Poly Web Styling */
  .poly-web { position: relative; width: 350px; height: 350px; }
  .poly-web svg { width: 100%; height: 100%; overflow: visible; drop-shadow: 0 0 15px rgba(90, 200, 250, 0.4); }
  .spin-group { transform-origin: 100px 100px; animation: spinWeb 40s linear infinite; }
  
  .hex { fill: none; stroke: var(--color-accent); stroke-width: 1; opacity: 0.2; transition: all 0.5s ease; }
  .h1 { stroke-dasharray: 4 6; animation: dashMove 20s linear infinite; opacity: 0.4; }
  .h2 { opacity: 0.3; }
  .h3 { stroke-width: 2; opacity: 0.5; }
  .h4 { fill: rgba(90, 200, 250, 0.05); stroke-width: 2; opacity: 1; }
  .spoke { stroke: var(--color-accent); stroke-width: 1; opacity: 0.2; }
  
  .poly-web:hover .hex { transform-origin: 100px 100px; transform: scale(1.05); stroke-width: 2; opacity: 0.8; }
  
  .core-glow { position: absolute; top: 50%; left: 50%; width: 50px; height: 50px; transform: translate(-50%, -50%); background: var(--color-accent); border-radius: 50%; filter: blur(20px); opacity: 0.6; animation: pulseGlow 3s ease-in-out infinite alternate; pointer-events: none; }
  
  /* Interactive Nodes */
  .buzz-node {
    position: absolute;
    width: 16px;
    height: 16px;
    background: var(--color-bg);
    border: 2px solid var(--color-accent);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    cursor: help;
    z-index: 10;
    box-shadow: 0 0 10px var(--color-accent);
    transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .buzz-node:hover {
    background: var(--color-accent);
    transform: translate(-50%, -50%) scale(1.4);
    box-shadow: 0 0 20px var(--color-accent);
  }
  .buzz-tooltip {
    position: absolute;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%) translateY(10px);
    background: var(--color-bg-alt);
    border: 1px solid var(--color-accent);
    color: var(--color-text);
    padding: 6px 12px;
    border-radius: 4px;
    font-family: var(--font-mono);
    font-size: 0.8rem;
    opacity: 0;
    pointer-events: none;
    transition: all 0.2s;
    white-space: nowrap;
    box-shadow: 0 4px 12px rgba(0,0,0,0.5);
  }
  .buzz-node:hover .buzz-tooltip {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  
  /* Node positions */
  .node-1 { top: 15%; left: 50%; }
  .node-2 { top: 32.5%; left: 80%; }
  .node-3 { top: 67.5%; left: 20%; }
  .node-4 { top: 67.5%; left: 80%; }

  @keyframes spinWeb { 100% { transform: rotate(360deg); } }
  @keyframes dashMove { 100% { stroke-dashoffset: 100; } }
  @keyframes pulseGlow { 0% { opacity: 0.3; transform: translate(-50%, -50%) scale(0.8); } 100% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.3); } }

  @media (max-width: 900px) {
    .hero-inner {
      grid-template-columns: 1fr;
    }
    .visual {
      display: none;
    }
  }
</style>