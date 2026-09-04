import { RankingInfo, rankItem } from '@tanstack/match-sorter-utils';
import { FilterFn, Row } from '@tanstack/react-table';

declare module '@tanstack/react-table' {
  //add fuzzy filter to the filterFns
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}

export const useFuzzyFilter = <TType extends {}>() => {
  // Define a custom fuzzy filter function that will apply ranking info to rows (using match-sorter utils)
  const fuzzyFilter: FilterFn<TType> = (row: Row<TType>, columnId: string, value, addMeta) => {
    // Rank the item
    const itemRank = rankItem(row.getValue(columnId), value);

    // Store the itemRank info
    addMeta({
      itemRank,
    });

    // Return if the item should be filtered in/out
    return itemRank.passed;
  };

  return fuzzyFilter;
};
