import { flexRender, Header, HeaderGroup } from '@tanstack/react-table';

import { ColumnWidthUnit } from '../helpers';
import * as Styled from '../style';
import { Typography } from "@components/typography";


interface Props<TType extends {}> {
    groups: HeaderGroup<TType>[];
    columnWidthUnit?: ColumnWidthUnit;
}

export const TableHeader = <TType extends {}>({ groups, columnWidthUnit }: Props<TType>) => (
    <thead>
    {groups.map((group: HeaderGroup<TType>) => (
        <tr key={group.id}>
            {group.headers.map((item: Header<TType, unknown>) => {
                return (
                    <th key={item.id} style={Styled.TableCell(item.getSize(), columnWidthUnit)}>
                        <Typography variant={'body'} size={'large'}>
                            {flexRender(item.column.columnDef.header, item.getContext())}
                        </Typography>
                    </th>
                );
            })}
        </tr>
    ))}
    </thead>
);
