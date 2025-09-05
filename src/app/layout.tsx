// app/layout.tsx (Com todos os pixels de rastreamento)

import Script from 'next/script';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import { HotmartPixel } from '../components/HotmartPixel';
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
        <noscript>
            <img height="1" width="1" style={{display: 'none'}}
                 src="https://www.facebook.com/tr?id=575682733921732&ev=PageView&noscript=1" />
        </noscript>
        
        {children}

        {/* Script do Google Analytics */}
        <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=AW-583505601"
        />
        <Script id="google-analytics" strategy="afterInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-583505601', { transport_type: 'beacon' });
            `}
        </Script>

        {/* Script do Meta Pixel (Facebook) */}
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
                fbq('init', '575682733921732');
                fbq('track', 'PageView');
            `}
        </Script>

        <HotmartPixel />
      </body>
    </html>
  );
}