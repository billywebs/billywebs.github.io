import { describe, expect, it } from 'vitest';
import { isWeb3FormsConfigured } from './config';

describe('isWeb3FormsConfigured', () => {
  it('returns false for the default placeholder key', () => {
    // The default export uses the placeholder value, so without env override
    // the function must report unconfigured.
    expect(isWeb3FormsConfigured()).toBe(false);
  });
});
