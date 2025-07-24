"use client";

import { useEffect, useState } from "react";
import SkeletonCard from "./acrd";

interface Produto {
  id: number;
  nome: string;
  descricao: string;
}

export default function Page() {
  const [produtos, setProdutos] = useState<Produto[] | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setProdutos([
        { id: 1, nome: "Produto 1", descricao: "Descrição 1" },
        { id: 2, nome: "Produto 2", descricao: "Descrição 2" },
        { id: 3, nome: "Produto 3", descricao: "Descrição 3" },
      ]);
    }, 3000);
  }, []);

  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Carregando Produtos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {produtos
          ? produtos.map((produto) => (
              <div
                key={produto.id}
                className="p-4 border border-gray-300 rounded-xl bg-white shadow"
              >
                <div className="h-40 bg-gray-100 rounded-lg mb-4" />
                <h2 className="text-xl font-semibold">{produto.nome}</h2>
                <p className="text-gray-600">{produto.descricao}</p>
              </div>
            ))
          : Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
      </div>
    </main>
  );
}
