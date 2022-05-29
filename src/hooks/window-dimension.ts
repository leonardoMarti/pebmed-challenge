import { useEffect, useState } from 'react';

export function WindowDimension() {
  const [windowDimenion, setWindowDimension] = useState(undefined);

  const detectSize = () => {
    if (typeof window !== 'undefined') {
      setWindowDimension(window?.innerWidth);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);

    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, [windowDimenion]);

  return windowDimenion;
}
