<script lang="ts">
  import { WEB3FORMS_KEY, WEB3FORMS_ENDPOINT, isWeb3FormsConfigured } from '$lib/config';

  type Status = 'idle' | 'sending' | 'ok' | 'error' | 'unconfigured';

  let name = $state('');
  let email = $state('');
  let message = $state('');
  let status = $state<Status>('idle');
  let errorMsg = $state('');

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();

    if (!isWeb3FormsConfigured()) {
      status = 'unconfigured';
      return;
    }

    status = 'sending';
    errorMsg = '';

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: 'New Billy Webs lead',
          from_name: name,
          name,
          email,
          message
        })
      });

      const data = await res.json();
      if (data?.success) {
        status = 'ok';
        name = '';
        email = '';
        message = '';
      } else {
        status = 'error';
        errorMsg = data?.message ?? 'Submission failed. Please email billy@billywebs.ca instead.';
      }
    } catch (err) {
      status = 'error';
      errorMsg = err instanceof Error ? err.message : 'Network error. Please email directly.';
    }
  }
</script>

<section class="section contact" id="contact" aria-labelledby="contact-heading">
  <div class="container">
    <h2 id="contact-heading">
      Let's get your business <span class="accent">online.</span>
    </h2>
    <p class="intro">
      Tell me about your business. Free mobile mockup back to you in 48 hours.
    </p>

    <div class="layout">
      <form class="form" onsubmit={handleSubmit} novalidate>
        <label class="field">
          <span>Name</span>
          <input
            type="text"
            name="name"
            bind:value={name}
            required
            autocomplete="name"
            placeholder="Your name"
          />
        </label>

        <label class="field">
          <span>Email</span>
          <input
            type="email"
            name="email"
            bind:value={email}
            required
            autocomplete="email"
            placeholder="you@yourbusiness.ca"
          />
        </label>

        <label class="field">
          <span>Tell me about your business</span>
          <textarea
            name="message"
            bind:value={message}
            required
            rows="5"
            placeholder="What do you do? What's your current site situation?"
          ></textarea>
        </label>

        <button type="submit" class="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send →'}
        </button>

        {#if status === 'ok'}
          <p class="msg msg-ok" role="status">
            Got it. I'll reply within 24 hours from billy@billywebs.ca.
          </p>
        {:else if status === 'error'}
          <p class="msg msg-err" role="alert">
            {errorMsg} Or email directly: <a href="mailto:billy@billywebs.ca">billy@billywebs.ca</a>
          </p>
        {:else if status === 'unconfigured'}
          <p class="msg msg-err" role="alert">
            Contact form not yet configured. Please email
            <a href="mailto:billy@billywebs.ca">billy@billywebs.ca</a> directly.
          </p>
        {/if}
      </form>

      <aside class="sidebar">
        <h3>Or skip the form</h3>
        <p>
          <a href="mailto:billy@billywebs.ca">billy@billywebs.ca</a>
        </p>
        <h3>Service area</h3>
        <p>
          Based in Ottawa, serving clients anywhere.
        </p>
        <h3>Response time</h3>
        <p>Within 24 hours, every time.</p>
      </aside>
    </div>
  </div>
</section>

<style>
  .eyebrow {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    color: var(--color-accent);
    letter-spacing: 0.12em;
    margin-bottom: var(--space-2);
    text-transform: uppercase;
  }

  .intro {
    color: var(--color-text-dim);
    max-width: 62ch;
    margin-bottom: var(--space-6);
  }

  .layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-5);
  }

  @media (min-width: 900px) {
    .layout {
      grid-template-columns: 2fr 1fr;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
  }

  .field span {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    color: var(--color-text-dim);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  input,
  textarea {
    font-family: var(--font-body);
    font-size: 1rem;
    color: var(--color-text);
    background: var(--color-bg-alt);
    border: 1px solid var(--color-border);
    padding: var(--space-2);
    width: 100%;
    resize: vertical;
    transition: border-color 120ms ease;
  }

  input:focus,
  textarea:focus {
    border-color: var(--color-accent);
    outline: none;
  }

  .submit {
    align-self: flex-start;
    background: var(--color-accent);
    color: #0d1420;
    font-family: var(--font-body);
    font-weight: 700;
    font-size: 1.05rem;
    padding: 12px 32px;
    border: 2px solid var(--color-accent);
    border-radius: 99px;
    box-shadow: 0 4px 14px rgba(90, 200, 250, 0.15);
    transition: all 150ms ease;
  }

  .submit:hover:not(:disabled),
  .submit:focus-visible {
    background: transparent;
    color: var(--color-accent);
    box-shadow: 0 6px 20px rgba(90, 200, 250, 0.25);
    transform: translateY(-2px);
  }

  .submit:disabled {
    opacity: 0.6;
    cursor: wait;
  }

  .msg {
    font-family: var(--font-mono);
    font-size: 0.9rem;
    padding: var(--space-2);
    border: 1px solid var(--color-border);
  }

  .msg-ok {
    border-color: var(--color-accent);
    color: var(--color-accent);
  }

  .msg-err {
    border-color: #ff4d4d;
    color: #ff8a8a;
  }

  .sidebar {
    background: var(--color-bg-alt);
    border: 1px solid var(--color-border);
    padding: var(--space-3);
  }

  .sidebar h3 {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    color: var(--color-accent);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-top: var(--space-3);
    margin-bottom: var(--space-1);
  }

  .sidebar h3:first-child {
    margin-top: 0;
  }

  .sidebar p {
    color: var(--color-text-dim);
    font-size: 0.95rem;
  }
</style>
