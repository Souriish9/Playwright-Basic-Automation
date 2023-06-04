import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('banner').getByText('Paul Collings').click();
  await page.getByRole('menuitem', { name: 'About' }).click();
  await page.getByText('OrangeHRM', { exact: true }).click();
  await page.getByRole('button', { name: '×' }).click();
  await page.getByRole('banner').getByText('Paul Collings').click();
  await page.getByRole('banner').getByRole('img', { name: 'profile picture' }).click();
  await page.getByRole('banner').getByText('Paul Collings').click();
  await page.locator('div').filter({ hasText: /^Dashboard$/ }).click();
});