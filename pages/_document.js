import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" translate="no">
        <Head>
          <meta name="google" content="notranslate" />
          <link rel="icon" href="./Icon3.png" className="object-contain w-10" />
          <link rel="preconnect" href="https://i.ytimg.com" />
          <Script src={`https://www.googletagmanager.com/gtag/js?id=G-P7YLPBXYJS`} strategy="afterInteractive" />

          <Script id="google-analytics" strategy="afterInteractive">
            {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-P7YLPBXYJS', {
      page_path: window.location.pathname,
    });
  `}
          </Script>

          <Script id="microsoft-clarity" strategy="lazyOnload">
            {`
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "hbpq3zkd07");
  `}
          </Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
