/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';

// 1. CORREÇÃO DE TYPESCRIPT: 
// A linha lá em cima (eslint-disable) permite usar 'any' aqui sem dar erro vermelho.
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    fbq: (...args: any[]) => void;
    _fbq: any;
  }
}

export default function AnalyticsManager({ 
  gaId, 
  pixelId 
}: { 
  gaId: string, 
  pixelId: string 
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 2. Lógica de UTM e Persistência
  useEffect(() => {
    try {
      const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
      const currentUtms: Record<string, string> = {};
      let hasUtm = false;

      utmParams.forEach(param => {
        const value = searchParams.get(param);
        if (value) {
          currentUtms[param.replace('utm_', '')] = value;
          hasUtm = true;
        }
      });

      if (hasUtm) {
        localStorage.setItem('daq_first_utm', JSON.stringify({ ...currentUtms, ts: Date.now() }));
      }
    } catch (e) {
      console.error('Erro UTM:', e);
    }
  }, [searchParams]);

  // 3. Disparo de PageView no GA4 quando a rota muda
  useEffect(() => {
    // Verifica se window.gtag existe antes de chamar
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('config', gaId, {
        page_path: pathname + (searchParams.toString() ? `?${searchParams.toString()}` : ''),
      });
    }
  }, [pathname, searchParams, gaId]);

  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            send_page_view: true,
            anonymize_ip: true,
            linker: {
              domains: ['destruindoasquestoes.com.br', 'hotmart.com'],
            }
          });
        `}
      </Script>

      {/* Meta Pixel - Facebook */}
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
          fbq('init', '${pixelId}');
          fbq('track', 'PageView');
        `}
      </Script>
    </>
  );
}