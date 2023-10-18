import { useRouter } from 'next/router';
import srHeader from './components/lang-sr/header/Header';
import srFooter from './components/lang-sr/footer/Footer';
import enHeader from './components/lang-en/header/Header';
import enFooter from './components/lang-en/footer/Footer';
import BackToTop from './components/ui/BackToTop';

const RootLayout = ({ children }) => {
  const router = useRouter();

  const { pathname } = router;
  const isEnglish = pathname.startsWith('/en');

  const Header = isEnglish ? enHeader : srHeader;
  const Footer = isEnglish ? enFooter : srFooter;

  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default RootLayout;