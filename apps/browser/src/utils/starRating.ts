export function starRating(total: number, number: number) {
  const average = total / number;
  const rating = (average / 5) * 100;
  return { average, rating };
}
