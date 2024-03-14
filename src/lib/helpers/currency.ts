export function formatCurrency(currencyCode: string, price: number): string {
  try {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode,
    });

    return formatter.format(price);
  } catch (error) {
    console.error('Error formatting currency:', error);
    return price.toString();
  }
}
