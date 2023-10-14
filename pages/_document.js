// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="sr">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta property="og:site_name" content="Šticko Plast"></meta>
                    <meta property="og:title" content="Šticko Plast - Montiranje PVC i Alu Stolarije" />
                    <meta property="og:description" content="Šticko Plast - Montiranje PVC i Alu Stolarije" />
                    <meta property="og:image" content="../public/assets/hero/slider-1-min.jpg" />
                    <meta property="og:type" content="website"></meta>
                    <link rel="icon" href="/stickoIcon.png" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap" rel="stylesheet"></link>
                    <meta name="description" content="Naša firma vam pruža mogućnost da svoj dom prilagodite svojim željama. Mi za Vas nudimo usluge prodaje i montaže najkvalitetnije PVC i Alu stolarije po meri, sa fokusom na kvalitetu i izdržljivosti. Za trajno zadovoljstvo i elegantan izgled, izaberite nas." />
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
