export function BaseUrlFoto(foto?: string | null) {
  if (!foto) return "/default.png"; // ou qualquer imagem padrão

  // Garante codificação da URL, preservando a base
  return `https://api.topfitnes.com.br/${encodeURI(foto)}`;
}
