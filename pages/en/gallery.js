import Head from 'next/head';
import GalleryHeader from '../../app/components/lang-en/gallery/GalleryHeader';
import Gallery from '../../app/components/lang-en/gallery/Gallery';

const GalleryPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Gallery - Šticko Plast - Installation of PVC and ALU carpentry. Our service includes the installation of windows, doors, venetian blinds, curtains and everything else that is needed for your home or business premises.</title>
      </Head>
        <GalleryHeader />
        <Gallery />
    </>
  )
}

export default GalleryPage;