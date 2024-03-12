export function formatCurrency(currencyCode: string, price: number): string {
    // Use Intl.NumberFormat for robust formatting
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currencyCode,
    });

    return formatter.format(price);
}