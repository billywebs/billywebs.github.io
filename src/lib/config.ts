/**
 * Web3Forms config.
 * 1. Go to https://web3forms.com → enter billy@billywebs.ca → check inbox for your key.
 * 2. Paste the key below (or set VITE_WEB3FORMS_KEY in a .env file).
 * 3. While the key is the placeholder, the form will fail validation client-side
 *    and show a friendly "form not yet configured" message instead of POSTing.
 */
export const WEB3FORMS_KEY: string =
  import.meta.env.VITE_WEB3FORMS_KEY ?? '30114688-6116-4f66-8e13-d3d5dc1f639d';

export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export const isWeb3FormsConfigured = (): boolean =>
  WEB3FORMS_KEY !== 'PASTE_YOUR_WEB3FORMS_ACCESS_KEY_HERE' && WEB3FORMS_KEY.length > 10;
