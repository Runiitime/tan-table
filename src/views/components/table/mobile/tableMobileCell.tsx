import { Cell, flexRender } from "@tanstack/react-table";

import * as Style from '../style';
import { Box } from "@components/box";
import { Typography } from "@components/typography";

interface Props<TType extends object> {
  cell: Cell<TType, unknown>;
}

/** Представление ячейки таблицы в мобильном виде - поле внутри карточки **/
export const TableMobileCell = <TType extends object>(props: Props<TType>) => {
  const { cell } = props;

  const header = cell.column.columnDef.header;
  const cellWrapperClassName = `${cell.column.id}-content`;
  const typographyClassName = `${cell.column.id}-title`;

  return (
    <Box sx={Style.MobileCellWrapper} className={cellWrapperClassName}>
      <Typography variant='body' size='small' className={typographyClassName}>
        {/*UNDONE: Рендерится только строковые элементы. Решить вопрос с кастомным headercell*/}
        {typeof header === 'string' && header}
      </Typography>
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </Box>
  );
};
