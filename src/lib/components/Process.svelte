<script lang="ts">
  const steps = [
    { n: '01', title: 'The Build', body: 'Custom, high-performance site. Mobile-first. Zero upfront cost.' },
    { n: '02', title: 'The Launch', body: 'Domain, hosting, SSL — all handled. No dashboards.' },
    { n: '03', title: 'The Support', body: 'Text, message, or email changes. Updates always included.' }
  ];
</script>

<section class="section process" id="process" aria-labelledby="process-heading">
  <div class="tech-grid" aria-hidden="true" style="opacity: 0.6;"></div>
  <div class="container container-relative">
    <h2 id="process-heading">
      The <span class="accent">$25&nbsp;/&nbsp;month</span> model.
    </h2>
    <p class="intro">One rate. No surprises. Zero technical burden on you.</p>

    <ol class="steps" role="list">
      {#each steps as step (step.n)}
        <li class="step">
          <span class="step-num" aria-hidden="true">{step.n}</span>
          <h3>{step.title}</h3>
          <p>{step.body}</p>
        </li>
      {/each}
    </ol>
  </div>
</section>

<style>
  .process {
    position: relative;
    overflow: hidden;
  }

  .container-relative {
    position: relative;
    z-index: 1;
  }

  .intro {
    color: var(--color-text-dim);
    margin-bottom: var(--space-8);
  }

  .steps {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-6);
    position: relative;
  }

  @media (min-width: 800px) {
    .steps {
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-4);
    }

    /* Subtle accent line connecting the three step numbers */
    .steps::before {
      content: '';
      position: absolute;
      top: 1.05rem;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(
        to right,
        var(--color-accent) 0%,
        var(--color-accent) 12%,
        transparent 12%,
        transparent 38%,
        var(--color-accent) 38%,
        var(--color-accent) 62%,
        transparent 62%,
        transparent 88%,
        var(--color-accent) 88%,
        var(--color-accent) 100%
      );
      opacity: 0.35;
      pointer-events: none;
    }
  }

  .step {
    position: relative;
    padding: 0;
  }

  .step-num {
    display: inline-block;
    font-family: var(--font-mono);
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--color-accent);
    letter-spacing: 0.12em;
    background: var(--color-bg);
    padding-right: var(--space-2);
    margin-bottom: var(--space-3);
    position: relative;
    z-index: 1;
  }

  .step h3 {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: var(--space-1);
    letter-spacing: -0.01em;
  }

  .step p {
    color: var(--color-text-dim);
    font-size: 0.95rem;
    max-width: 28ch;
  }
</style>
