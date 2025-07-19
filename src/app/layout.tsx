import type { Metadata } from "next";
import { Goldman, Poppins } from "next/font/google";
import "../config/globals.css";
import localFont from "next/font/local";

const poppins = localFont({
  src: [
    {
      path: "../assets/fonts/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
  display: "swap",
});

const goldman = localFont({
  src: [
    {
      path: "../assets/fonts/Goldman-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Goldman-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-goldman",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TOPFITNES | ACADEMIA",
  description:
    "A TopFitnes é uma academia completa com equipamentos modernos, treinos personalizados e profissionais qualificados. Transforme sua saúde e bem-estar com a gente.",
  keywords: [
    "Academia",
    "Treinamento",
    "Musculação",
    "TopFitness",
    "Fitness",
    "Bem-estar",
    "Exercícios",
    "Personal trainer",
    "Saúde",
    "Emagrecimento",
    "Hipertrofia",
    "Academia em Massapê",
    "Academia em Mirim",
  ],
  generator: "Next.js",
  applicationName: "TopFitnes Academia",
  openGraph: {
    title: "TOPFITNES | Academia de Alta Performance",
    description:
      "Alcance seus objetivos com treinos personalizados, estrutura moderna e acompanhamento profissional. Venha para a TOPFITNES!",
    url: "https://topfitnes.com.br",
    siteName: "TOPFITNES",
    images: [
      {
        url: "/opengraph-image.png", // imagem que será mostrada ao compartilhar
        width: 1200,
        height: 630,
        alt: "Imagem de destaque da TOPFITNES Academia",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.variable} ${goldman.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
