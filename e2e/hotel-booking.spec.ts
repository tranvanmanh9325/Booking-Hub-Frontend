import { test, expect } from '@playwright/test';

test.describe('Hotel Booking Flow', () => {

    test.beforeEach(async ({ page }) => {
        // Mock Hotel List API
        await page.route('**/api/v1/hotels?*', async route => {
            const json = {
                content: [
                    { id: 1, name: 'Luxury Hotel', city: 'Hanoi', address: '123 Street', rating: 4.8, pricePerNight: 100 }
                ],
                totalPages: 1
            };
            await route.fulfill({ json });
        });

        // Mock Single Hotel API
        await page.route('**/api/v1/hotels/1', async route => {
            const json = { id: 1, name: 'Luxury Hotel', city: 'Hanoi', address: '123 Street', rating: 4.8, description: 'Best hotel' };
            await route.fulfill({ json });
        });
    });

    test('should display hotel list and navigate to details', async ({ page }) => {
        await page.goto('/hotels');

        // Check if hotel is displayed
        // We assume there is a card or list item containing "Luxury Hotel"
        // Adjust selectors based on actual implementation of hotels-sections.tsx
        await expect(page.getByText('Luxury Hotel')).toBeVisible();

        // Click on the hotel (Assuming the name is clickable or there is a "View" button)
        await page.getByText('Luxury Hotel').click();

        // Should navigate to detail page
        await expect(page).toHaveURL(/.*\/hotel\/1/);

        // Check details
        await expect(page.getByRole('heading', { name: 'Luxury Hotel' })).toBeVisible();
    });
});
