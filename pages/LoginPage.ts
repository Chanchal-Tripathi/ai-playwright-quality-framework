
import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  email = this.page.locator('#email');
  password = this.page.locator('#password');
  loginBtn = this.page.getByRole('button', { name: 'Login' });

  async login(user: string, pass: string) {
    await this.email.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }
}
