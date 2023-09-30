import Header from './components/header/Header';
import Footer from './components/footer/Footer';

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