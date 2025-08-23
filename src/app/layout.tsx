// app/layout.tsx (Com a configuração final para Font Awesome)

// MUDANÇA 1: Adicionamos a configuração do Font Awesome para Next.js
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'DAQ Essencial – Aprenda com a prova, na prática',
  description: 'Descubra o método que transforma cada questão em um mapa direto para sua aprovação com o Método SPQ.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} bg-slate-50 text-slate-900 font-sans`}>
        {children}
      </body>
    </html>
  );
}