import "./globals.css";
import Header from '../src/components/header/Header';
import Footer from '../src/components/footer/Footer';

const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default RootLayout;
