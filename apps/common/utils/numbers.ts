export function formatNumber(num: number, locale = "en-US") {
  return new Intl.NumberFormat(locale).format(num);
}

export function nanGuard(n: number) {
  const number = Number.isNaN(n) ? 0 : n;
  return number;
}
