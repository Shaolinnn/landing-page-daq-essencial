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
  "www.destruindoasquestoes.com.br",
  "bit.ly",
  "l.wl.co",
  "hotmart.com",
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}

        {/* Contentsquare – mapa de calor / UX */}
        <Script
          id="contentsquare-script"
          src="https://t.contentsquare.net/uxa/8b9c231da4716.js"
          strategy="afterInteractive"
        />

        {/* 1) Carrega a biblioteca do GA4 */}
        <Script
          id="ga4-src"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />

        {/* 2) Inicializa GA4 com linker, sem page_view automático E com debug para todos */}
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Consent Mode v2 básico (opcional — ajusta se usar CMP)
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'granted'
            });

            // Config GA4 sem page_view automático
            gtag('config', '${GA_MEASUREMENT_ID}', {
              send_page_view: false,
              transport_type: 'beacon',
              anonymize_ip: true,
              allow_ad_personalization_signals: false,
              allow_google_signals: false,
              debug_mode: true, // Força "DebugView" no GA4
              linker: {
                domains: ${JSON.stringify(CROSS_DOMAIN_LINKER)},
                decoration: 'linker',
              }
            });

            // Cross-domain: auto-link de todos os <a> para domínios configurados
            (function() {
              function decorateUrl(url) {
                try {
                  var u = new URL(url, window.location.origin);

                  // Só decora se for domínio permitido
                  var host = (u.hostname || '').replace(/^www\\./i, '');
                  var isAllowed = ${JSON.stringify(CROSS_DOMAIN_LINKER)}.some(function(domain) {
                    var d = domain.replace(/^www\\./i, '');
                    return host === d || host.endsWith('.' + d);
                  });
                  if (!isAllowed) return url;

                  // Cria um clientId fake (ou poderia chamar gtag('get', ...))
                  var cid = 'cid-' + Math.random().toString(16).slice(2);
                  u.searchParams.set('_gl', 'cid=' + encodeURIComponent(cid));

                  return u.toString();
                } catch (e) {
                  return url;
                }
              }

              function patchLinks() {
                var anchors = document.querySelectorAll('a[href]');
                anchors.forEach(function(a) {
                  var href = a.getAttribute('href') || '';
                  if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
                    return;
                  }
                  try {
                    var decorated = decorateUrl(href);
                    if (decorated && decorated !== href) {
                      a.setAttribute('href', decorated);
                    }
                  } catch (e) {}
                });
              }

              // Roda no load
              window.addEventListener('load', patchLinks);

              // Observa mudanças no DOM (para SPAs / Next.js)
              var observer = new MutationObserver(function(mutations) {
                patchLinks();
              });
              observer.observe(document.documentElement, {
                childList: true,
                subtree: true
              });
            })();
          `}
        </Script>

        {/* 3) Persistência de UTM + page_view inicial com UTMs (em modo debug) */}
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

                // Se chegou com UTM na URL, salva
                if (
                  utm.source ||
                  utm.medium ||
                  utm.campaign ||
                  utm.term ||
                  utm.content
                ) {
                  localStorage.setItem('daq_first_utm', JSON.stringify({
                    ...utm,
                    ts: Date.now()
                  }));
                }

                // Resgata UTM salvo (se existir)
                var stored = localStorage.getItem('daq_first_utm');
                var firstUtm = stored ? JSON.parse(stored) : null;

                // Dispara page_view manual com debug_mode
                function sendPageView() {
                  var page_location = window.location.href;
                  var page_path = window.location.pathname + window.location.search;
                  var page_title = document.title || 'DAQ Essencial';

                  var eventParams = {
                    page_location: page_location,
                    page_path: page_path,
                    page_title: page_title,
                    debug_mode: true
                  };

                  // Se tiver UTM persistida, manda junto
                  if (firstUtm) {
                    eventParams.utm_source = firstUtm.source || '(not set)';
                    eventParams.utm_medium = firstUtm.medium || '(not set)';
                    eventParams.utm_campaign = firstUtm.campaign || '(not set)';
                    if (firstUtm.term) eventParams.utm_term = firstUtm.term;
                    if (firstUtm.content) eventParams.utm_content = firstUtm.content;
                  }

                  // Se tiver gtag carregado, envia
                  if (typeof window.gtag === 'function') {
                    window.gtag('event', 'page_view', eventParams);
                  }
                }

                // Debounce simples pra evitar flood em navegações rápidas
                window.__ga4TitleDebounce = window.__ga4TitleDebounce || null;

                if (typeof window !== 'undefined') {
                  if (window.__ga4InitialPVFired !== true) {
                    window.__ga4InitialPVFired = true;
                    sendPageView();
                  }

                  // Caso o título mude depois de carregar, dispara de novo (opcional)
                  var titleEl = document.querySelector('title') || document.documentElement;
                  var titleObserver = new MutationObserver(function() {
                    clearTimeout(window.__ga4TitleDebounce);
                    window.__ga4TitleDebounce = setTimeout(sendPageView, 150);
                  });
                  titleObserver.observe(titleEl, { childList: true, subtree: true });
                }
              } catch (e) {}
            })();
          `}
        </Script>
      </body>
    </html>
  );
}