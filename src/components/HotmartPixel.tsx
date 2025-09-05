// app/components/HotmartPixel.tsx

"use client";

import Script from 'next/script';

export const HotmartPixel = () => {
  return (
    <Script id="hotmart-pixel" strategy="afterInteractive">
      {`
        (function(l,a,u,n,c,h,e,r){l['HotmartLauncherObject']=c;l[c]=l[c]||function(){
        (l[c].q=l[c].q||[]).push(arguments)},l[c].l=1*new Date();h=a.createElement(u),
        e=a.getElementsByTagName(u)[0];h.async=1;h.src=n;e.parentNode.insertBefore(h,e)
        })(window,document,'script','//launcher.hotmart.com/launcher.js','hot');

        hot('account','724d6454-843f-36de-9666-c2bc235cd7be');
      `}
    </Script>
  );
};