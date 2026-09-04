import {
  ColumnDef,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getSortedRowModel,
  Table,
  useReactTable,
} from '@tanstack/react-table';

import { TableFilterParams } from '../helpers';
import { useFuzzyFilter } from './useFuzzyFilter';

interface UseTableInitParams<TType extends object, TValue> {
  data: TType[];
  columns: ColumnDef<TType, TValue>[];
  filterParams?: TableFilterParams<TType>;
}

export const useTableInit = <TType extends object, TValue>(params: UseTableInitParams<TType, TValue>): Table<TType> => {
  const { data, columns, filterParams } = params;

  /** CONST **/
  const { fuzzyFilter: customFuzzyFilter, setGlobalFilter, globalFilter } = filterParams ?? {};

  /** HOOKS **/
  const fuzzyFilter = useFuzzyFilter();

  return useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    filterFns: {
      fuzzy: customFuzzyFilter ?? fuzzyFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: 'fuzzy',
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });
};
