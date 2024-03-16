import { expect, test } from '@playwright/test';

import { formatCurrency } from '@/lib/helpers/currency';

const mockProductData = {
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
};

test.describe('Product Details Page', () => {
  test('Loads product details for a valid product ID', async ({ browser }) => {
    const context = await browser.newContext(); // Create a new browser context
    const page = await context.newPage(); // Create a new page within the context

    const productId = mockProductData.id;
    const formattedAmount = formatCurrency(
      mockProductData.currencyCode,
      mockProductData.price
    );

    await page.route('**/mock-product-api/**', (route) => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(mockProductData),
      });
    });

    await page.goto(`http://localhost:3000/product/${productId}`);

    await expect(page.locator('img')).toBeVisible();

    await expect(page.locator('h1').first()).toHaveText(mockProductData.name);
    await expect(page.locator('p')).toHaveText(mockProductData.description);
    await expect(
      page.locator(`h1:has-text("${formattedAmount}")`)
    ).toBeVisible();

    await page.locator('button:has-text("Add to cart")').click();

    await page.close(); // Close the page
    await context.close(); // Close the context
  });
});
