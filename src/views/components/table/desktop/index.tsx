import React from 'react';
import { ColumnDef, Table as TTable } from '@tanstack/react-table';
import { VirtualItem } from '@tanstack/virtual-core';

import { TableHeader } from '../header';
import { ColumnWidthUnit, TableFilterParams, TableRowSelectionParams } from '../helpers';
import { TableBodyContent } from './tableBody';
import * as Style from '../style';
import { Box } from "@components/box";
import { Loader } from "@components/loader";
import { useTableInit, DesktopVirtualizer, useTableVirtualizer } from "@components/table/hooks";

interface Props<TType extends object, TValue> {
  data: TType[];
  columns: ColumnDef<TType, TValue>[];
  columnWidthUnit?: ColumnWidthUnit;
  isFullWidth?: boolean;
  isFetching?: boolean;
  noDataTitle?: string;
  filterParams?: TableFilterParams<TType>;
  rowSelection?: TableRowSelectionParams<TType>;
  onTableScroll?: (containerRefElement?: HTMLDivElement | null) => void;
}

const tableWrapperClass = 'table-wrapper';

export const DesktopTable = <TType extends object, TValue>(props: Props<TType, TValue>) => {
  const {
    data,
    columns,
    filterParams,
    rowSelection,
    noDataTitle,
    columnWidthUnit = '%',
    isFetching = false,
    isFullWidth = true,
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

  const virtualizer = useTableVirtualizer<TType>(rowsFromModel, parentRef) as DesktopVirtualizer;
  const totalSize = virtualizer?.getTotalSize();
  const virtualItems = virtualizer?.getVirtualItems();

  const rows =
    virtualItems?.map((virtualItem: VirtualItem) => ({
      virtualRow: virtualItem,
      row: rowsFromModel[virtualItem.index],
    })) ?? [];

  /** CALLBACKS **/
  const handleScroll = React.useCallback(() => onTableScroll?.(parentRef.current), [onTableScroll]);

  /** MEMO **/
  const TanTableSx = React.useMemo(() => Style.TanTable(isFullWidth), [isFullWidth]);
  const TableBodySx = React.useMemo(() => Style.TableBody(totalSize), [totalSize]);

  /** RENDER */
  return (
    <Box sx={TanTableSx} className={tableWrapperClass} ref={parentRef} onScroll={handleScroll}>
      <table>
        <TableHeader groups={table.getHeaderGroups()} columnWidthUnit={columnWidthUnit} />
        <tbody style={TableBodySx}>
          <TableBodyContent
            rows={rows}
            columnWidthUnit={columnWidthUnit}
            noDataTitle={noDataTitle}
            measureElement={virtualizer?.measureElement}
          />
        </tbody>
      </table>
      {isFetching && (
        <Box sx={Style.RowLoaderWrapper}>
          <Loader visible />
        </Box>
      )}
    </Box>
  );
};
