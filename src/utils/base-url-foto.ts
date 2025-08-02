export function BaseUrlFoto(foto?: string | null) {
  if (!foto) return "/default.png"; // ou qualquer imagem padrão

  // Garante codificação da URL, preservando a base
  return `http://localhost:4000/${encodeURI(foto)}`;
}
