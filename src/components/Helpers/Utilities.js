import { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

export const useWindowSize = () => {
  const isClient = typeof window === 'object';
 
  const getSize = () => {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }
 
  const [windowSize, setWindowSize] = useState(getSize);
 
  useEffect(() => {
    if (!isClient) {
      return false;
    }
   
    const handleResize = () => {
      setWindowSize(getSize());
    }
 
    window.addEventListener('resize', debounce(() => {
      handleResize();
    }, 500));
  }); // Empty array ensures that effect is only run on mount and unmount
 
  return windowSize;
}