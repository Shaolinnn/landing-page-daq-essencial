// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.destruindoasquestoes.com.br"),
  title: {
    default: "Destruindo as Questões — Método SPQ",
    template: "%s | Destruindo as Questões",
  },
  description:
    "Aprenda com a prova, na prática. Método SPQ: estudar por questões com estratégia e revisão inteligente.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.destruindoasquestoes.com.br/",
    siteName: "Destruindo as Questões",
    title: "Destruindo as Questões — Método SPQ",
    description:
      "Aprenda com a prova, na prática. Método SPQ: estudar por questões com estratégia e revisão inteligente.",
  },
  robots: {
    index: true,
    follow: true,
  },
  // Mantém o referrer útil para atribuição sem quebrar privacidade
  // (equivalente ao que você configurou no servidor)
  referrer: "origin-when-cross-origin",
};

const GA_MEASUREMENT_ID = "G-D0YYSYX9YH";

// Domínios para cross-domain (linker)
const CROSS_DOMAIN_LINKER = [
  "destruindoasquestoes.com.br",
  "bit.ly",
  "l.wl.co",
  "hotmart.com",
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}

        {/* 1) Carrega a biblioteca do GA4 */}
        <Script
          id="ga4-src"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />

        {/* 2) Inicializa GA4 com linker e sem enviar page_view automático */}
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Consent Mode v2 básico (opcional — ajusta se usar CMP)
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'granted'
            });

            gtag('config', '${GA_MEASUREMENT_ID}', {
              send_page_view: false,
              linker: { domains: ${JSON.stringify(CROSS_DOMAIN_LINKER)} }
            });
          `}
        </Script>

        {/* 3) Persistência de UTM + page_view inicial com UTMs */}
        <Script id="ga4-utm-persist" strategy="afterInteractive">
          {`
            (function() {
              try {
                var params = new URLSearchParams(window.location.search);
                var utm = {
                  source: params.get('utm_source'),
                  medium: params.get('utm_medium'),
                  campaign: params.get('utm_campaign'),
                  term: params.get('utm_term'),
                  content: params.get('utm_content')
                };

                // Se chegou com UTM, persistimos
                if (utm.source || utm.medium || utm.campaign || utm.term || utm.content) {
                  localStorage.setItem('utm_source', utm.source || '');
                  localStorage.setItem('utm_medium', utm.medium || '');
                  localStorage.setItem('utm_campaign', utm.campaign || '');
                  localStorage.setItem('utm_term', utm.term || '');
                  localStorage.setItem('utm_content', utm.content || '');
                }

                // Recupera valores (útil em navegações internas)
                var saved = {
                  source: localStorage.getItem('utm_source') || '',
                  medium: localStorage.getItem('utm_medium') || '',
                  campaign: localStorage.getItem('utm_campaign') || '',
                  term: localStorage.getItem('utm_term') || '',
                  content: localStorage.getItem('utm_content') || ''
                };

                // Dispara page_view manual inicial com UTM (se houver)
                if (typeof gtag === 'function') {
                  gtag('event', 'page_view', {
                    page_location: window.location.href,
                    page_path: window.location.pathname + window.location.search,
                    page_title: document.title,
                    utm_source: saved.source || undefined,
                    utm_medium: saved.medium || undefined,
                    utm_campaign: saved.campaign || undefined,
                    utm_term: saved.term || undefined,
                    utm_content: saved.content || undefined
                  });
                }
              } catch (e) {
                console && console.warn && console.warn('GA4 UTM persist error:', e);
              }
            })();
          `}
        </Script>

        {/* 4) Page view em mudanças de rota (SPA / App Router) */}
        <Script id="ga4-spa-tracking" strategy="afterInteractive">
          {`
            (function() {
              // Helper para enviar page_view a cada mudança de URL
              function sendPageView() {
                try {
                  var saved = {
                    source: localStorage.getItem('utm_source') || '',
                    medium: localStorage.getItem('utm_medium') || '',
                    campaign: localStorage.getItem('utm_campaign') || '',
                    term: localStorage.getItem('utm_term') || '',
                    content: localStorage.getItem('utm_content') || ''
                  };

                  if (typeof gtag === 'function') {
                    gtag('event', 'page_view', {
                      page_location: window.location.href,
                      page_path: window.location.pathname + window.location.search,
                      page_title: document.title,
                      utm_source: saved.source || undefined,
                      utm_medium: saved.medium || undefined,
                      utm_campaign: saved.campaign || undefined,
                      utm_term: saved.term || undefined,
                      utm_content: saved.content || undefined
                    });
                  }
                } catch (e) {}
              }

              // Dispara em back/forward
              window.addEventListener('popstate', sendPageView);

              // Monkeypatch em pushState/replaceState para capturar navegações internas
              ['pushState','replaceState'].forEach(function(type) {
                var orig = history[type];
                history[type] = function() {
                  var rv = orig.apply(this, arguments);
                  try { sendPageView(); } catch(e) {}
                  return rv;
                };
              });

              // Alguns frameworks alteram o title depois — observe e envia novamente
              var titleObserver = new MutationObserver(function() {
                // pequeno debounce
                clearTimeout(window.__ga4TitleDebounce);
                window.__ga4TitleDebounce = setTimeout(sendPageView, 150);
              });
              titleObserver.observe(document.querySelector('title') || document.documentElement, { childList: true, subtree: true });
            })();
          `}
        </Script>
      </body>
    </html>
  );
}