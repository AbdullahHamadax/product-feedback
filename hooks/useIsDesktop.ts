import { useState, useEffect, useLayoutEffect } from 'react';

export const useIsDesktop = (): boolean => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  const updateWindow = (): void => {
    setIsDesktop(window.innerWidth > 767);
  };

  useLayoutEffect (() => {

    updateWindow();

    window.addEventListener("resize", updateWindow);
    return () => window.removeEventListener("resize", updateWindow);
  });

  return isDesktop;
};
