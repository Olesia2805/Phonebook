import { test, expect } from '@playwright/test';

test('loads and displays contacts', async ({ page }) => {
  await new Promise(r => setTimeout(r, 5000));
  await page.route('**/contacts', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([
        { id: '1', name: 'Alice' },
        { id: '2', name: 'Bob' },
      ]),
    });
  });

  await page.goto('http://localhost:5173');

  await expect(page.getByTestId('loader')).toBeVisible();

  await expect(page.getByText('Alice')).toBeVisible();
  await expect(page.getByText('Bob')).toBeVisible();
});
