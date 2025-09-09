export function formatarDataISO(data: Date | string | undefined): string {
  if (!data) return "";
  const d = new Date(data);
  if (isNaN(d.getTime())) return "";

  const dia = String(d.getDate()).padStart(2, "0");
  const mes = String(d.getMonth() + 1).padStart(2, "0");
  const ano = d.getFullYear();

  return `${dia}/${mes}/${ano}`;
}
