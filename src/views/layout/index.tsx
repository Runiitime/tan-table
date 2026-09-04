import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Table } from "@components/table"
import { IPerson, makeData, newPerson } from './data';

export const App: React.FC = () => {
  const [data, setData] = React.useState<IPerson[]>([]);

  React.useEffect(() => {
    setData(makeData());
  }, []);

  const handleAddItem = React.useCallback(() => {
    setData([...data, newPerson()]);
  }, [data]);

  const columns: ColumnDef<IPerson, string>[] = React.useMemo(() => ([
    {
      accessorKey: 'num',
      header: '№',
      cell: ({ row }) => row.index + 1,
      size: 5,
      maxSize: 5,
    },
    {
      accessorKey: 'firstName',
      header: 'First name',
    },
    {
      accessorKey: 'lastName',
      header: 'Last name',
    },
    {
      accessorKey: 'age',
      header: 'Age',
    },
  ]), [])

  return <Table<IPerson, string> data={data} columns={columns} onAddItem={handleAddItem} />;
}

