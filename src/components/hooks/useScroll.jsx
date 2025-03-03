import { useState } from 'react';

export const useScroll = () => {
  const [isDown, setIsDown] = useState();

  window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
      setIsDown(true);
    } else {
      setIsDown(false);
    }
  });

  return { isDown: isDown };
};
