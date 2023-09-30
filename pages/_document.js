// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta property="og:site_name" content="Šticko Plast"></meta>
                    <meta property="og:title" content="Šticko Plast - Montiranje PVC i Alu Stolarije" />
                    <meta property="og:description" content="Šticko Plast - Montiranje PVC i Alu Stolarije" />
                    <meta property="og:image" content="../public/assets/work-min.jpg" />
                    <meta property="og:type" content="website"></meta>
                    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap" rel="stylesheet"></link>
                    <title>Šticko Plast - Montiranje PVC i Alu stolarije. Naša usluga uključuje montažu prozora, vrata, venecijanera, zavesa i svega drugog što je neophodno za Vaš dom ili Vaš poslovni prostor.</title>
                    <meta name="description" content="Naša firma vam pruža mogućnost da svoj dom prilagodite svojim željama. Mi za Vas montiramo PVC i aluminijumsku stolariju po meri, sa fokusom na kvalitetu i izdržljivosti. Za trajno zadovoljstvo i elegantan izgled, izaberite nas." />
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
