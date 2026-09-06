import React from 'react';
import { ColumnDef, Table as TTable } from '@tanstack/react-table';
import { VirtualItem } from '@tanstack/virtual-core';

import { RowItems, TableFilterParams, TableRowSelectionParams } from '../helpers';
import { MobileVirtualizer, useTableInit, useTableVirtualizer } from '../hooks';
import { TableMobileWrapper } from './tableMobileWrapper';
import * as Style from '../style';
import { Box } from "src/views/components/box";
import { Loader } from "@components/loader";

interface Props<TType extends object, TValue> {
  data: TType[];
  showSearch?: boolean;
  columns: ColumnDef<TType, TValue>[];
  filterParams?: TableFilterParams<TType>;
  rowSelection?: TableRowSelectionParams<TType>;
  noDataTitle?: string;
  isFetching?: boolean;
  onTableScroll?: (containerRefElement?: HTMLDivElement | null) => void;
}

export const MobileTable = <TType extends object, TValue>(props: Props<TType, TValue>) => {
  const {
    data,
    columns,
    filterParams,
    rowSelection,
    showSearch = false,
    noDataTitle,
    isFetching = false,
    onTableScroll,
  } = props;

  /** REF */
  const parentRef = React.useRef<HTMLDivElement>(null);

  /** HOOKS */
  const table: TTable<TType> = useTableInit({
    data,
    columns,
    filterParams,
    rowSelectionParams: rowSelection,
  });

  /** CONST */
  const { rows: rowsFromModel } = table.getRowModel();

  const virtualizer: MobileVirtualizer = useTableVirtualizer<TType>(rowsFromModel, parentRef) as MobileVirtualizer;
  const virtualItems = virtualizer?.getVirtualItems?.();
  const fullHeight = virtualizer?.getTotalSize?.();
  const startOffset = virtualItems?.[0]?.start ?? 0;
  const measureElement = virtualizer?.measureElement;

  /** CALLBACKS **/
  const handleScroll = React.useCallback(() => onTableScroll?.(parentRef.current), [onTableScroll]);

  /** MEMO */
  const rows = React.useMemo((): RowItems<TType>[] => {
    return (
      virtualItems?.map((virtualItem: VirtualItem) => ({
        virtualRow: virtualItem,
        row: rowsFromModel[virtualItem.index],
      })) ?? []
    );
  }, [virtualItems, rowsFromModel]);

  const tableMobileWrapperSx = React.useMemo(() => Style.TableMobileWrapper(fullHeight), [fullHeight]);

  /** RENDER */
  return (
    <Box sx={Style.TableMobileContainer(showSearch)} ref={parentRef} onScroll={handleScroll}>
      <Box sx={tableMobileWrapperSx}>
        <TableMobileWrapper
          rows={rows}
          itemsStartOffset={startOffset}
          noDataTitle={noDataTitle}
          measureElement={measureElement}
        />

        {isFetching && (
          <Box sx={Style.RowLoaderWrapper}>
            <Loader visible />
          </Box>
        )}
      </Box>
    </Box>
  );
};
