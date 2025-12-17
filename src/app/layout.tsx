import type { Metadata } from "next";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";
import AnalyticsManager from "@/components/AnalyticsManager";

// --- CONFIGURAÇÃO DE IDs ---
const GA_MEASUREMENT_ID = "G-D0YYSYX9YH";
const META_PIXEL_ID = "575682733921732";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.destruindoasquestoes.com.br"),
  title: {
    default: "Destruindo as Questões — Método SPQ",
    template: "%s | Destruindo as Questões",
  },
  description:
    "Aprenda com a prova, na prática. Método SPQ: estudar por questões com estratégia e revisão inteligente.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* OTIMIZAÇÃO DE REDE 5G: Pre-conexão com serviços externos */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://cdn.utmify.com.br" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
      </head>
      <body>
        {children}

        {/* Analytics isolado com Suspense para não travar carregamento */}
        <Suspense fallback={null}>
          <AnalyticsManager gaId={GA_MEASUREMENT_ID} pixelId={META_PIXEL_ID} />
        </Suspense>

        {/* Scripts Secundários - Prioridade Baixa (lazyOnload) */}
        <Script
          id="utmify-script"
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          strategy="lazyOnload"
          data-utmify-prevent-subids
        />

        <Script
          id="contentsquare-script"
          src="https://t.contentsquare.net/uxa/8b9c231da4716.js"
          strategy="lazyOnload"
        />

        <noscript>
          {/* O comentário abaixo desativa o aviso de erro do Next.js para esta linha específica */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt="Meta Pixel"
          />
        </noscript>
      </body>
    </html>
  );
}