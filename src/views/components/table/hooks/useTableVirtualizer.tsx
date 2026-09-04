import React from 'react';
import { useMediaQuery } from '@mui/material';
import { Row } from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import { Virtualizer } from '@tanstack/virtual-core';
import { media } from "@assets/ui";

export type DesktopVirtualizer = Virtualizer<HTMLDivElement, HTMLTableRowElement>;
export type MobileVirtualizer = Virtualizer<HTMLDivElement, Element>;

export const useTableVirtualizer = <TType extends object>(
  rows: Row<TType>[],
  parentRef: React.MutableRefObject<HTMLDivElement>,
): DesktopVirtualizer | MobileVirtualizer => {
  const isDesktop = useMediaQuery(media.desktop);

  const getEstimateSize = React.useCallback(() => (isDesktop ? 70 : 300), [isDesktop]);

  const virtualizerParams = React.useMemo(
    () => ({
      count: rows?.length,
      getScrollElement: () => parentRef?.current,
      estimateSize: getEstimateSize,
      overscan: isDesktop ? 10 : 5,
    }),
    [getEstimateSize, isDesktop, parentRef, rows?.length],
  );

  const virtualizer = useVirtualizer<HTMLDivElement, HTMLTableRowElement>(virtualizerParams);
  if (!parentRef?.current && rows?.length === 0) {
    return null;
  }
  return virtualizer;
};
