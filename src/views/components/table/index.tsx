import React from 'react';
import { Add } from '@mui/icons-material';
import { useMediaQuery } from '@mui/material';
import { SxProps } from '@mui/system';
import { ColumnDef } from '@tanstack/react-table';
import classnames from 'classnames';
import _ from 'lodash';

import { DesktopTable } from './desktop';
import { BOTTOM_FETCH_MARGIN, DesktopTableSettings, TableRowSelectionParams, VirtualizeParams } from './helpers';
import { MobileTable } from './mobile';
import * as Style from './style';
import { media } from "@assets/ui";
import { Box } from "../box";
import { Fab } from "../fab";
import { TextField } from "../text-field";

export interface Props<TType extends object, TValue> {
    data: TType[];
    columns: ColumnDef<TType, TValue>[];
    sx?: SxProps;
    className?: string;
    showSearch?: boolean;
    desktopSettings?: DesktopTableSettings;
    noDataTitle?: string;
    searchLabel?: string;
    rowSelection?: TableRowSelectionParams<TType>;
    virtualizeParams?: VirtualizeParams;
    onAddItem?: () => void;
}

const mainClass = 'table';

export const Table = <TType extends object, TValue>(props: Props<TType, TValue>) => {
    const {
        data,
        columns,
        sx,
        className,
        showSearch = false,
        desktopSettings,
        rowSelection,
        virtualizeParams,
        searchLabel,
        noDataTitle,
        onAddItem,
    } = props;

    /** STATE */
    const [globalFilter, setGlobalFilter] = React.useState('');
    const deferredData = React.useDeferredValue(data);

    /** CONST */
    const classes = classnames({
        [mainClass]: true,
        [className]: className,
    });
    const isFetching = data !== deferredData || virtualizeParams?.isFetchingRows;

    /** HOOKS */
    const isDesktop = useMediaQuery(media.desktop);

    const handleTableScroll = React.useCallback(
        (containerRefElement: HTMLDivElement | null) => {
            if (!containerRefElement || !virtualizeParams) {
                return;
            }

            const { isFetchingRows, fetchNextRows } = virtualizeParams;
            const { scrollHeight, scrollTop, clientHeight } = containerRefElement;

            // Стали находиться к дну таблицы ближе, чем на BOTTOM_FETCH_MARGIN, запрашиваем следующую часть списка
            const isWithinBottom = scrollHeight - scrollTop - clientHeight < BOTTOM_FETCH_MARGIN;
            const needFetchMore = isWithinBottom && !isFetchingRows;

            if (needFetchMore) {
                fetchNextRows();
            }
        },
        [virtualizeParams],
    );

    /** MEMO **/
    const tableWrapperSx = React.useMemo(() => _.merge({}, Style.TableWrapper, sx), [sx]);
    const filterParams = React.useMemo(
        () => ({
            globalFilter,
            setGlobalFilter,
        }),
        [globalFilter],
    );

    /** RENDER */
    return (
        <Box className={classes} sx={tableWrapperSx}>
            {(showSearch || onAddItem) && (
                <Box sx={Style.SearchWrapper}>
                    {showSearch && (
                        <TextField value={globalFilter} label={searchLabel} sx={Style.TextField} onChange={setGlobalFilter} />
                    )}
                    {onAddItem && (
                        <Fab color={"secondary"} onClick={onAddItem}>
                            <Add />
                        </Fab>
                    )}
                </Box>
            )}
            {!isDesktop ? (
                <MobileTable
                    data={data}
                    showSearch={showSearch}
                    columns={columns}
                    filterParams={filterParams}
                    rowSelection={rowSelection}
                    noDataTitle={noDataTitle}
                    isFetching={isFetching}
                    onTableScroll={handleTableScroll}
                />
            ) : (
                <DesktopTable
                    data={data}
                    columns={columns}
                    columnWidthUnit={desktopSettings?.columnWidthUnit}
                    isFullWidth={desktopSettings?.isFullWidth}
                    rowSelection={rowSelection}
                    filterParams={filterParams}
                    noDataTitle={noDataTitle}
                    isFetching={isFetching}
                    onTableScroll={handleTableScroll}
                />
            )}
        </Box>
    );
};
