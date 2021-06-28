import { CreateUiField } from "./createUiField";
export interface TableColumnCreate extends CreateUiField {
    sortable?: boolean;
    filterable?: boolean;
    defaultTableColumnWidth?: number;
}
