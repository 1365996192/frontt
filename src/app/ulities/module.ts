export interface TransactionsItem {
    gender: string;
    category: string;
    merchant: string;
    city: string;
    state: string;
    population: number;
    amount: number;
    // trans_time:string;
    // trans_num:number;
    // first_name:string;
    // last_name:string;
    // job:string;
    // dob:string
  }

export  interface ColumnItem {
    name: string;
    // sortOrder: NzTableSortOrder | null;
    // sortFn: NzTableSortFn<TransactionsItem> | null;
    // listOfFilter: NzTableFilterList;
    // filterFn: NzTableFilterFn<TransactionsItem> | null;
    // filterMultiple: boolean;
    // sortDirections: NzTableSortOrder[];
  }