import React, { useState, useEffect } from 'react';
import useCheckDevice from '../../custom-hooks/CheckDevice';
import DesktopNav from './DesktopNav';
import BurgerNav from './BurgerNav';

const Header = () => {
  const deviceWidth = useCheckDevice();
  const [nav, setNav] = useState(null);

  useEffect(() => {
    { deviceWidth >= 1024 ? setNav(<DesktopNav />) : setNav(<BurgerNav />) }
  }, [deviceWidth]);

  return (
    <header>
      {nav}
    </header>
  );
}

export default Header;