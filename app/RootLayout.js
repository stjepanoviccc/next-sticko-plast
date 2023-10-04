import LanguageProvider from './context/LanguageContext';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const RootLayout = ({ children }) => {
  return (
    <LanguageProvider>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </LanguageProvider>
  )
}

export default RootLayout;