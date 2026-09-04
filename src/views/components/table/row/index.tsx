import React from 'react';
import { Cell, Row } from '@tanstack/react-table';
import { VirtualItem } from '@tanstack/virtual-core';

import { TableCell } from '../cell';
import { ColumnWidthUnit } from '../helpers';

interface Props<TType extends object> {
    row: Row<TType>;
    virtualRow: VirtualItem;
    styles: React.CSSProperties;
    columnWidthUnit?: ColumnWidthUnit;
    measureElement: (node: HTMLTableRowElement) => void;
}

export const TableRow = <TType extends object>(props: Props<TType>) => {
    const { row, styles, virtualRow, measureElement, columnWidthUnit } = props;

    const visibleCells = row?.getVisibleCells();

    /** RENDER */
    return (
        <tr style={styles} data-index={virtualRow.index} ref={measureElement}>
            {visibleCells.map((cell: Cell<TType, unknown>) => {
                return (
                    <TableCell
                        key={`${cell.id}-cell`}
                        id={cell.column.id}
                        cell={cell as Cell<unknown, unknown>}
                        columnWidthUnit={columnWidthUnit}
                    />
                );
            })}
        </tr>
    );
};
