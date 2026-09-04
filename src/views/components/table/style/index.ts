import { CSSProperties } from 'react';
import { SxProps } from '@mui/system';

import { ColumnWidthUnit } from '../helpers';
import {InterfaceMD3} from "@assets/md3";
import {hexToRGBAStyle} from "@helpers/color";

export const TableWrapper: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    overflow: 'hidden',
};

export const TanTable = (isFullWidth: boolean): SxProps => ({
    width: '100%',
    overflow: 'auto',
    position: 'relative',
    height: '100%',
    boxSizing: 'border-box',

    border: `1px solid ${InterfaceMD3.color.outlineVariant}`,
    borderRadius: InterfaceMD3.shape.corner.extraSmall,

    table: {
        height: '100%',
        width: isFullWidth ? '100%' : undefined,
        borderCollapse: 'collapse',
        borderSpacing: 0,
        tableLayout: 'fixed',

        thead: {
            position: 'sticky',
            top: 0,
            zIndex: 1,
            background: InterfaceMD3.color.surfaceContainer,

            tr: {
                display: 'flex',
                width: '100%',
            },
        },

        tbody: {
            height: '100%',
            background: InterfaceMD3.color.surface,
            tr: {
                '&.row__empty': {
                    width: '100%',
                    pointerEvents: 'none',
                },

                '&:hover': {
                    background: hexToRGBAStyle(InterfaceMD3.color.onSurface, InterfaceMD3.state.hover.stateLayerOpacity),
                    cursor: 'pointer',
                },
            },
        },

        tr: {
            boxSizing: 'border-box',
        },

        th: {
            padding: '2px 4px',
            textAlign: 'left',
            boxSizing: 'border-box',
            display: 'flex',

            '& > *': {
                width: '100%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            },
        },

        td: {
            padding: '6px',
            boxSizing: 'border-box',
            borderBottom: `1px solid ${InterfaceMD3.color.outline}`,
            display: 'flex',
            alignItems: 'center',

            '&.cell__empty': {
                display: 'block',
                width: '100%',
                height: '100%',
                border: 'none',
            },
        },
    },
});

export const TableBody = (height: number): CSSProperties => ({
    display: 'grid',
    height: height !== 0 ? `${height}px` : '100%',
    position: 'relative',
});

export const TableCell = (width?: number, columnWidthUnit: ColumnWidthUnit = '%'): CSSProperties => ({
    width: `${width}${columnWidthUnit}`,
    height: '70px',
    display: 'flex',
    alignItems: 'center',
});

export const TextField: SxProps = {
    flexGrow: 1,
};

export const SearchWrapper: SxProps = {
    display: 'flex',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    marginBottom: '16px',
    gap: '16px',
};

export const TableRow = (transformY: number): CSSProperties => ({
    display: 'flex',
    position: 'absolute',
    transform: `translateY(${transformY}px)`,
    height: '70px',
    width: '100%',
});

export const CellWrapper: SxProps = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',

    '& > *': {
        maxHeight: {
            lg: '60px',
            xs: '100%',
        },
        overflow: 'hidden',
        display: '-webkit-box',
        ' -webkit-line-clamp': {
            lg: 2,
            xs: 'auto',
        },
        ' -webkit-box-orient': 'vertical',
    },
};

export const TableMobileContainer = (showSearch: boolean): SxProps => ({
    height: showSearch ? 'calc(100vh - 100px - 68px)' : 'calc(100vh - 100px)',
    width: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
    contain: 'strict',
});

export const TableMobileWrapper = (height: number): SxProps => ({
    height: height !== 0 ? `${height}px` : '100%',
    width: '100%',
    position: 'relative',
});

export const TableMobileContent = (translateY: number): SxProps => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    transform: `translateY(${translateY}px)`,
});

export const TableMobileCard: SxProps = {
    width: '100%',
    margin: '16px 0',

    '.card__content': {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
    },
};

export const MobileCellWrapper: SxProps = {
    minHeight: '56px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
};

export const RowLoaderWrapper: SxProps = {
    position: 'relative',
    height: '70px',
};

export const TableEmptyLabelContainer: SxProps = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: '100%',
    maxHeight: '300px',
    width: '100%',
};
