import { test, expect } from '@playwright/test';

test.describe('Movie Booking Flow', () => {

    test.beforeEach(async ({ page }) => {
        // Mock Movies API
        await page.route('**/api/v1/movies?*', async route => {
            const json = {
                content: [
                    { id: 1, title: 'Action Movie', genre: 'Action', duration: 120, rating: 4.5 }
                ],
                totalPages: 1
            };
            await route.fulfill({ json });
        });
    });

    test('should display movie list', async ({ page }) => {
        await page.goto('/movies'); // Adjust path if it's tickets or cinema

        // Check if movie is displayed
        await expect(page.getByText('Action Movie')).toBeVisible();
    });
});
