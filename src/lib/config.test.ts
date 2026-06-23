import { describe, expect, it } from 'vitest';
import { isWeb3FormsConfigured, WEB3FORMS_KEY } from './config';

describe('isWeb3FormsConfigured', () => {
  it('returns true when a real Web3Forms key is configured', () => {
    expect(WEB3FORMS_KEY).not.toBe('PASTE_YOUR_WEB3FORMS_ACCESS_KEY_HERE');
    expect(WEB3FORMS_KEY.length).toBeGreaterThan(10);
    expect(isWeb3FormsConfigured()).toBe(true);
  });
});
