import Head from 'next/head';
import GalleryHeader from '../app/components/gallery/GalleryHeader';
import Gallery from '../app/components/gallery/Gallery';

const GalleryPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Galerija - Šticko Plast - Montiranje PVC i Alu stolarije.</title>
      </Head>
        <GalleryHeader />
        <Gallery />
    </>
  )
}

export default GalleryPage;