import { FilterFn, Row, RowSelectionState } from '@tanstack/react-table';
import { VirtualItem } from '@tanstack/react-virtual';

export type ColumnWidthUnit = '%' | 'rem' | 'px';

export interface TableFilterParams<TType extends object> {
    globalFilter: string;
    fuzzyFilter?: FilterFn<TType>;
    setGlobalFilter: (filter: string) => void;
}

export interface TableRowSelectionParams<TType extends object> {
    rowSelection: RowSelectionState;
    onRowSelectionChange: (rowSelection: RowSelectionState) => void;
    getRowId?: (originalRow: TType, index: number, parent?: Row<TType>) => string;
}

export interface DesktopTableSettings {
    columnWidthUnit?: ColumnWidthUnit;
    isFullWidth?: boolean;
}

export interface VirtualizeParams {
    isFetchingRows: boolean;
    fetchNextRows: () => void;
}

export interface RowItems<TType extends object> {
    virtualRow: VirtualItem;
    row: Row<TType>;
}
