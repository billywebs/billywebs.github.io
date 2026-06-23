<script lang="ts">
  const year = new Date().getFullYear();
</script>

<footer class="footer" aria-label="Site footer">
  <div class="container footer-inner">
    <div>
      <p class="brand">Billy&nbsp;Webs</p>
      <p class="tagline">
        Lightning-fast sites for trades and small businesses in Ottawa and beyond.
      </p>
    </div>
    <div class="meta">
      <p><a href="mailto:billy@billywebs.ca">billy@billywebs.ca</a></p>
      <p>&copy; {year} Billy Webs. All rights reserved.</p>
    </div>
  </div>
</footer>

<style>
  .footer {
    background: transparent;
    border-top: 1px solid var(--color-border);
    padding: var(--space-6) 0 var(--space-4);
  }

  .footer-inner {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }

  @media (min-width: 720px) {
    .footer-inner {
      grid-template-columns: 1fr auto;
      align-items: end;
    }
  }

  .brand {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 1.4rem;
    letter-spacing: -0.02em;
    color: var(--color-text);
    margin-bottom: var(--space-1);
  }

  .tagline {
    color: var(--color-text-dim);
    font-size: 0.9rem;
    max-width: 50ch;
  }

  .meta {
    font-family: var(--font-mono);
    font-size: 0.85rem;
    color: var(--color-text-dim);
  }

  .meta a {
    color: var(--color-accent);
  }
</style>
