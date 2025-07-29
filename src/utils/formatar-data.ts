export function formatarDataISO(data: Date | string | undefined): string {
  if (!data) return "";
  const d = new Date(data);
  if (isNaN(d.getTime())) return "";
  return d.toISOString().substring(0, 10);
}
