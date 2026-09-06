import React from 'react';
import { Cell, flexRender } from '@tanstack/react-table';

import { Box } from "src/views/components/box";
import { ColumnWidthUnit } from '../helpers';
import * as Styled from '../style';

interface Props {
    id: string;
    cell: Cell<unknown, unknown>;
    columnWidthUnit?: ColumnWidthUnit;
}

export const TableCell: React.FC<Props> = React.memo((props) => {
    const { id, cell, columnWidthUnit } = props;

    const cellWidth = cell.column.getSize();

    const tdStyle = React.useMemo(() => Styled.TableCell(cellWidth, columnWidthUnit), [cellWidth, columnWidthUnit]);

    /** RENDER */
    return (
        <td key={id} style={tdStyle}>
            <Box sx={Styled.CellWrapper}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Box>
        </td>
    );
});

TableCell.displayName = 'TableCell';
