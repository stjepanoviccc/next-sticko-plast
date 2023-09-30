import Head from 'next/head';
import GalleryHeader from '../src/components/gallery/GalleryHeader';
import Gallery from '../src/components/gallery/Gallery';
import RootLayout from '@/app/RootLayout';

const GalleryPage = () => {
  return (
    <>
    <Head>
      <title>Galerija - Šticko Plast - Montiranje PVC i Alu stolarije.</title>
    </Head>
    <RootLayout>
        <GalleryHeader />
        <Gallery />
    </RootLayout>
    </>
  )
}

export default GalleryPage;