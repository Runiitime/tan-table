import React from 'react';


import { RowItems } from '../helpers';
import { NoDataCard } from '../no-data-card';
import { TableMobileCard } from './tableMobileCard';
import * as Style from '../style';
import { Box } from "@components/box";

interface Props<TType extends object> {
  rows: RowItems<TType>[];
  itemsStartOffset: number;
  noDataTitle?: string;
  measureElement?: (node: Element) => void;
}

export const TableMobileWrapper = <TType extends object>(props: Props<TType>) => {
  const { rows, itemsStartOffset, noDataTitle, measureElement } = props;

  const tableMobileContentSx = React.useMemo(() => Style.TableMobileContent(itemsStartOffset), [itemsStartOffset]);

  if (rows.length === 0) {
    return <NoDataCard title={noDataTitle} />;
  }

  return (
    <Box sx={tableMobileContentSx}>
      {rows.map((row) => {
        const { virtualRow, row: realRow } = row;

        return (
          <TableMobileCard key={virtualRow.key} row={realRow} virtualRow={virtualRow} measureElement={measureElement} />
        );
      })}
    </Box>
  );
};
