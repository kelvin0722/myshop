import { expect, test } from '@playwright/test';

const mockProductData = [
  {
    id: 11,
    name: '10 Lives',
    description: '10 Lives product bundle.',
    price: 1,
    currencyCode: 'USD',
    currencySymbol: '$',
    quantity: 10,
    imageLocation:
      'https://dev-images-carry1st-products.s3.eu-west-2.amazonaws.com/74e517a3-0615-4019-bb08-cc697cf4e747.png',
    status: 'ACTIVE',
  },
  {
    id: 19,
    name: '25 Lives',
    description: '25 Lives product bundle.',
    price: 2,
    currencyCode: 'USD',
    currencySymbol: '$',
    quantity: 25,
    imageLocation:
      'https://dev-images-carry1st-products.s3.eu-west-2.amazonaws.com/0a90f406-7340-4957-87ae-a8233d8c9f68.png',
    status: 'ACTIVE',
  },
];

test.describe('HomePage and Product Grid', () => {
  test.beforeEach(async ({ page }) => {
    // Mock API response with test ID for clarity (adjust endpoint)
    await page.route('**/mock-product-api/**', async (route) => {
      // Introduce a delay of 2 seconds before fulfilling the route
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(mockProductData),
      });
    });

    await page.goto('http://localhost:3000'); // Adjust base URL
  });

  test('Renders product grid after loading is successful', async ({ page }) => {
    await page.waitForSelector('[data-testid="product-grid"]');

    await expect(
      page.locator('[data-testid="product-grid-loading"]')
    ).toBeHidden();
  });

  test('Displays product information in each card', async ({ page }) => {
    // Access first product card (modify selector if needed)
    await page.waitForSelector('[data-testid="product-grid"]');

    const firstProductCard = page
      .locator('[data-testid="product-card"]')
      .first();

    // Assertions for card content (adapt based on your ProductCard component)
    await expect(
      firstProductCard.locator('[data-testid="product-name"]')
    ).toHaveText(mockProductData[0].name);
    await expect(
      firstProductCard.locator('[data-testid="product-price"]')
    ).toContainText('$' + mockProductData[0].price);
  });
});
