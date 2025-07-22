export function FormatarNumero(telefone: string) {
  // Remove tudo que não for número
  const numeroTelefone = String(telefone).replace(/\D/g, "");

  // Verificar se o numero tem 11 dígito
  if (numeroTelefone.length === 11) {
    const dd = numeroTelefone.slice(0, 2);
    const prefixo = numeroTelefone.slice(2, 7);
    const sufixo = numeroTelefone.slice(7, 11);

    const numeroFormatado = `(${dd}) ${prefixo}-${sufixo}`;

    return numeroFormatado;
  }

  return numeroTelefone;
}
