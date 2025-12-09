import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

// --- CONFIGURAÇÃO DE IDs ---
const GA_MEASUREMENT_ID = "G-D0YYSYX9YH";
const META_PIXEL_ID = "575682733921732";
// ---------------------------

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
  referrer: "origin-when-cross-origin",
};

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

        {/* --- 1) UTMify (NOVO SCRIPT SOLICITADO) --- */}
        <Script
          id="utmify-script"
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          strategy="afterInteractive"
          data-utmify-prevent-subids
        />

        {/* --- 2) Contentsquare --- */}
        <Script
          id="contentsquare-script"
          src="https://t.contentsquare.net/uxa/8b9c231da4716.js"
          strategy="afterInteractive"
        />

        {/* --- 3) Meta Pixel (Facebook) --- */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt="Meta Pixel"
          />
        </noscript>

        {/* --- 4) Google Analytics 4 (GA4) --- */}
        <Script
          id="ga4-src"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />

        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'granted'
            });

            gtag('config', '${GA_MEASUREMENT_ID}', {
              send_page_view: false,
              transport_type: 'beacon',
              anonymize_ip: true,
              allow_ad_personalization_signals: false,
              allow_google_signals: false,
              debug_mode: true,
              linker: {
                domains: ${JSON.stringify(CROSS_DOMAIN_LINKER)},
                decoration: 'linker',
              }
            });

            // Cross-domain linker manual
            (function() {
              function decorateUrl(url) {
                try {
                  var u = new URL(url, window.location.origin);
                  var host = (u.hostname || '').replace(/^www\\./i, '');
                  var isAllowed = ${JSON.stringify(CROSS_DOMAIN_LINKER)}.some(function(domain) {
                    var d = domain.replace(/^www\\./i, '');
                    return host === d || host.endsWith('.' + d);
                  });
                  if (!isAllowed) return url;
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
                  if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
                  try {
                    var decorated = decorateUrl(href);
                    if (decorated && decorated !== href) a.setAttribute('href', decorated);
                  } catch (e) {}
                });
              }
              window.addEventListener('load', patchLinks);
              var observer = new MutationObserver(function(mutations) { patchLinks(); });
              observer.observe(document.documentElement, { childList: true, subtree: true });
            })();
          `}
        </Script>

        {/* --- 5) Persistência de UTM + PageView Manual --- */}
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

                if (utm.source || utm.medium || utm.campaign || utm.term || utm.content) {
                  localStorage.setItem('daq_first_utm', JSON.stringify({ ...utm, ts: Date.now() }));
                }

                var stored = localStorage.getItem('daq_first_utm');
                var firstUtm = stored ? JSON.parse(stored) : null;

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

                  if (firstUtm) {
                    eventParams.utm_source = firstUtm.source || '(not set)';
                    eventParams.utm_medium = firstUtm.medium || '(not set)';
                    eventParams.utm_campaign = firstUtm.campaign || '(not set)';
                    if (firstUtm.term) eventParams.utm_term = firstUtm.term;
                    if (firstUtm.content) eventParams.utm_content = firstUtm.content;
                  }

                  if (typeof window.gtag === 'function') {
                    window.gtag('event', 'page_view', eventParams);
                  }
                }

                window.__ga4TitleDebounce = window.__ga4TitleDebounce || null;
                if (typeof window !== 'undefined') {
                  if (window.__ga4InitialPVFired !== true) {
                    window.__ga4InitialPVFired = true;
                    sendPageView();
                  }
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