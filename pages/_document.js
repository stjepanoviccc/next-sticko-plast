// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="sr">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta property="og:site_name" content="Šticko Plast"></meta>
                    <meta property="og:title" content="Šticko Plast - Prodaja i montaža PVC i Alu Stolarije" />
                    <meta property="og:description" content="Šticko Plast - Prodaja i montaža PVC i Alu Stolarije" />
                    <meta property="og:image" content="../assets/hero/slider-2-min.jpg" />
                    <meta property="og:type" content="website"></meta>
                    <meta name="description" content="Naša firma vam pruža mogućnost da svoj dom prilagodite svojim željama. Mi za Vas nudimo usluge prodaje i montaže najkvalitetnije PVC i Alu stolarije po meri, sa fokusom na kvalitetu i izdržljivosti. Za trajno zadovoljstvo i elegantan izgled, izaberite nas." />
                    <link rel="icon" href="/stickoIcon.png" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap" rel="stylesheet"></link>
                    <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`} />
                    <Script id="ga-script" strategy="lazyOnload">
                        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                    `}
                    </Script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
