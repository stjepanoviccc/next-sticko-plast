import { useEffect, useState } from 'react';
import DesktopNav from './DesktopNav';
import BurgerNav from './BurgerNav';

const EnHeader = () => {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateWindowWidth);
    updateWindowWidth();

    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  const nav = windowWidth && windowWidth >= 1280 ? <DesktopNav /> : <BurgerNav />;

  return (
    <header>
      {nav}
    </header>
  );
}

export default EnHeader;