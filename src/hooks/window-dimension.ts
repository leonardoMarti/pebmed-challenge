import { useEffect, useState } from 'react';

export function WindowDimension() {
  const [windowDimenion, setWindowDimension] = useState(window.innerWidth);

  const detectSize = () => {
    setWindowDimension(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);

    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, [windowDimenion]);

  return windowDimenion;
}
