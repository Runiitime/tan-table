import React from 'react';

export const elementOverflowed = (element: React.RefObject<HTMLElement>): boolean => {
  return (
    element?.current?.scrollWidth > element?.current?.offsetWidth ||
    element?.current?.scrollHeight > element?.current?.clientHeight
  );
};
