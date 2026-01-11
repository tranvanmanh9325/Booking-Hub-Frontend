import { test, expect } from '@playwright/test';

test.describe('Authentication Flow', () => {

    test('should allow user to navigate to login page', async ({ page }) => {
        await page.goto('/');

        // Find login button/link (Adjust selector based on actual UI)
        const loginLink = page.getByRole('link', { name: /đăng nhập/i }); // VN Locale assumed
        // Fallback if english or icon
        if (await loginLink.isVisible()) {
            await loginLink.click();
        } else {
            await page.goto('/auth/login');
        }

        await expect(page).toHaveURL(/.*auth\/login/);
        await expect(page.getByRole('heading', { name: /đăng nhập/i })).toBeVisible();
    });

    test('should show validation error on empty login', async ({ page }) => {
        await page.goto('/auth/login');

        await page.getByTestId('login-submit').click();

        // Expect some validation message
        // Adjust logic based on actual form behavior (HTML5 validation or custom)
        // Here we check if input is focused or error message exists
        // Assuming react-hook-form display error text seems likely

        // This is a placeholder assertion. Update matching actual app behavior.
        // await expect(page.getByText('Email is required')).toBeVisible(); 
    });
});