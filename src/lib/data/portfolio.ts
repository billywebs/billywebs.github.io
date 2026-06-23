export interface PortfolioItem {
  /** Short title shown above the description. */
  title: string;
  /** One-sentence description shown under the title. */
  description: string;
  /** Live URL — clicking the card opens this in a new tab. */
  url: string;
  /** Path to screenshot inside /static (e.g. "/portfolio/serenity-bay.png").
   *  Leave empty string to render a placeholder tile. */
  image: string;
  /** Optional tag shown as a small label (e.g. "Campground", "Community"). */
  tag?: string;
}

/**
 * Drop new portfolio entries here.
 * Add screenshots to `static/portfolio/` and reference them with `/portfolio/<file>`.
 */
export const portfolio: PortfolioItem[] = [
  {
    title: 'Serenity Bay Campground',
    description:
      'Interactive site map with draggable parcels, live availability, and a leaflet-powered explorer.',
    url: 'https://billybell991.github.io/serenity-bay/',
    image: '/portfolio/serenity-bay.png',
    tag: 'Campground'
  },
  {
    title: 'Wade Collins Electric',
    description: 'A sharp, no-nonsense storefront replacing a clunky Wix build.',
    url: 'https://billybell991.github.io/wade_collins_electric/',
    image: '/portfolio/wade-collins.png',
    tag: 'Trades'
  },
  {
    title: 'Ryan Peplinskie Photography',
    description: 'High-performance gallery showcasing stunning visuals without bogging down.',
    url: 'https://billybell991.github.io/ryan_peplinskie_photography/',
    image: '/portfolio/ryan-peplinskie.png',
    tag: 'Photography'
  }
];
