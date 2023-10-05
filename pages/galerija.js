import Head from 'next/head';
import GalleryHeader from '../app/components/lang-sr/gallery/GalleryHeader';
import Gallery from '../app/components/lang-sr/gallery/Gallery';

const GalleryPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Galerija - Šticko Plast - Montiranje PVC i Alu stolarije. Naša usluga uključuje montažu prozora, vrata, venecijanera, zavesa i svega drugog što je neophodno za Vaš dom ili Vaš poslovni prostor.</title>
      </Head>
        <GalleryHeader />
        <Gallery />
    </>
  )
}

export default GalleryPage;