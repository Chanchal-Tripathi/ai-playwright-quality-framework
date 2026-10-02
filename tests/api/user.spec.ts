import { expect, test } from '@playwright/test';
import { UserApi } from '../../api/UserApi';

test.describe('Reusable API client example', () => {
  test('repository client returns expected metadata', async ({ request }) => {
    const api = new UserApi(request);
    const repository = await api.getRepository(
      'Chanchal-Tripathi',
      'ai-playwright-quality-framework'
    );

    expect(repository.name).toBe('ai-playwright-quality-framework');
    expect(repository.owner.login).toBe('Chanchal-Tripathi');
  });
});
