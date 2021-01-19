export function formatCurrency(value: number | string, symbol: string): string {
  return `${symbol}${thousandSeparator(value)}`;
}

export function thousandSeparator(value: number | string): string {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
