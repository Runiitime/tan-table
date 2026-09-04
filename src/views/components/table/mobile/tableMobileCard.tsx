import React from 'react';
import { Cell, Row } from '@tanstack/react-table';
import { VirtualItem } from '@tanstack/react-virtual';

import { Card } from "@components/card";
import { TableMobileCell } from './tableMobileCell';
import * as Style from '../style';

interface Props<TType extends object> {
  row: Row<TType>;
  virtualRow: VirtualItem;
  measureElement?: (node: Element) => void;
}

/** Представление строки таблицы в мобильном виде **/
const TableMobileCardInner = <TType extends object>(props: Props<TType>) => {
  const { row, virtualRow, measureElement } = props;

  // Массив зависимостей корректный, потому что нам не обязательно следить за всем объектом строки, достаточно сравнения по id
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const visibleCells: Cell<TType, unknown>[] = React.useMemo(() => row?.getVisibleCells(), [row?.id]);

  return (
    <div ref={measureElement} data-index={virtualRow.index}>
      <Card className='table__mobile-card' sx={Style.TableMobileCard} type='elevated'>
        {visibleCells?.map((cell) => (
          <TableMobileCell key={`${cell.id}-cell`} cell={cell} />
        ))}
      </Card>
    </div>
  );
};

export const TableMobileCard = React.memo(TableMobileCardInner) as <T extends object>(
  props: Props<T>,
) => React.ReactElement;
