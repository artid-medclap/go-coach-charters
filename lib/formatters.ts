export function formatCurrency(amount: number, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function pluralize(count: number, word: string) {
  return `${count} ${word}${count === 1 ? "" : "s"}`;
}
