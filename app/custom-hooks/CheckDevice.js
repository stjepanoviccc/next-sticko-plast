import { useState, useEffect } from 'react';

const useCheckDevice = () => {
  const isClient = typeof window === 'object'; // Check if window is defined

  const [windowWidth, setWindowWidth] = useState(isClient ? window.innerWidth : 0);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isClient]);

  return windowWidth;
}

export default useCheckDevice;

