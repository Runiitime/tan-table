import { ColumnWidthUnit, RowItems } from '../helpers';
import { NoDataCard } from '../no-data-card';
import { TableRow } from '../row';
import * as Style from '../style';

interface Props<TType extends object> {
  rows: RowItems<TType>[];
  columnWidthUnit?: ColumnWidthUnit;
  noDataTitle?: string;
  measureElement?: (node: HTMLTableRowElement) => void;
}

export const TableBodyContent = <TType extends object>(props: Props<TType>) => {
  const { rows, columnWidthUnit, noDataTitle, measureElement } = props;

  if (!rows.length || !measureElement) {
    return (
      <tr className='row__empty'>
        <td className='cell__empty'>
          <NoDataCard title={noDataTitle} />
        </td>
      </tr>
    );
  }

  return (
    <>
      {rows.map((item: RowItems<TType>) => {
        const { row, virtualRow } = item;

        return (
          <TableRow<TType>
            key={virtualRow.key}
            row={row}
            styles={Style.TableRow(virtualRow.start)}
            virtualRow={virtualRow}
            measureElement={measureElement}
            columnWidthUnit={columnWidthUnit}
          />
        );
      })}
    </>
  );
};
