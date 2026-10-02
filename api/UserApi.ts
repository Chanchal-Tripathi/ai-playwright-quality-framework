import { APIRequestContext, expect } from '@playwright/test';

export class UserApi {
  constructor(private readonly request: APIRequestContext) {}

  async getRepository(owner: string, repository: string) {
    const response = await this.request.get(
      `https://api.github.com/repos/${owner}/${repository}`,
      { headers: { Accept: 'application/vnd.github+json' } }
    );

    expect(response.ok()).toBeTruthy();
    return response.json();
  }
}
