export function formatFullDate(date: Date): string {
  return date.toLocaleDateString('en-UK', { month: 'long', day: 'numeric', year: 'numeric' });
}
