// app/layout.tsx
import "./globals.css"; // 🟠 Garante que os estilos Tailwind/global sejam carregados
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Destruindo as Questões | Método SPQ",
  description:
    "Aprenda com o método SPQ — estude por questões com foco no que realmente cai e transforme cada questão em uma aula.",
  icons: { icon: "/favicon.ico" },
};

const GA4_ID = "G-D0YYSYX9YH";
const ADS_ID = "AW-583505601";
const CROSS_DOMAINS = [
  "destruindoasquestoes.com.br",
  "bit.ly",
  "l.wl.co",
  "hotmart.com",
  "hotmart.app",
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Ads */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`}
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ADS_ID}', { transport_type: 'beacon' });
          `}
        </Script>

        {/* Google Analytics 4 */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
        />
        <Script id="ga4-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA4_ID}', {
              send_page_view: true,
              transport_type: 'beacon',
              linker: {
                domains: ${JSON.stringify(CROSS_DOMAINS)}
              }
            });
          `}
        </Script>

        {/* Persistência de UTMs */}
        <Script id="persist-utm" strategy="afterInteractive">
          {`
            (function() {
              try {
                const url = new URL(window.location.href);
                const params = url.searchParams;
                const keys = ['utm_source','utm_medium','utm_campaign','utm_term','utm_content'];
                let hasUtm = false;
                keys.forEach(k => {
                  if (params.has(k)) {
                    hasUtm = true;
                    localStorage.setItem(k, params.get(k) || '');
                  }
                });
                if (hasUtm && typeof gtag === 'function') {
                  gtag('event', 'utm_persist', {
                    utm_source: localStorage.getItem('utm_source') || '(not set)',
                    utm_medium: localStorage.getItem('utm_medium') || '(not set)',
                    utm_campaign: localStorage.getItem('utm_campaign') || '(not set)',
                    utm_term: localStorage.getItem('utm_term') || '',
                    utm_content: localStorage.getItem('utm_content') || ''
                  });
                }
              } catch (e) {}
            })();
          `}
        </Script>
      </head>

      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}