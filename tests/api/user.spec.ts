
import { test, expect } from '@playwright/test';
import { UserApi } from '../../api/UserApi';

test('create user via api', async () => {
  const api = new UserApi();
  const user = await api.createUser();

  expect(user.name).toBe('QA');
});
