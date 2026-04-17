export function nanGuard(n: number) {
  const number = Number.isNaN(n) ? 0 : n;
  return number;
}
