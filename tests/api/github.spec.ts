import { expect, test } from '@playwright/test';

test.describe('GitHub public API contract checks', () => {
  test('@smoke repository metadata exposes expected contract', async ({ request }) => {
    const response = await request.get(
      'https://api.github.com/repos/Chanchal-Tripathi/ai-playwright-quality-framework',
      { headers: { Accept: 'application/vnd.github+json' } }
    );

    expect(response.ok()).toBeTruthy();
    expect(response.headers()['content-type']).toContain('application/json');

    const repository = await response.json();
    expect(repository).toEqual(
      expect.objectContaining({
        name: 'ai-playwright-quality-framework',
        owner: expect.objectContaining({ login: 'Chanchal-Tripathi' }),
        private: false
      })
    );
  });

  test('unknown repository returns a client error', async ({ request }) => {
    const response = await request.get(
      'https://api.github.com/repos/Chanchal-Tripathi/this-repository-should-not-exist-qe-demo',
      { headers: { Accept: 'application/vnd.github+json' } }
    );

    expect(response.status()).toBe(404);
  });
});
