import { GridPreset } from "./gridPreset";
import { UiField } from "./uiField";
export interface TableColumn extends UiField {
    preset?: GridPreset;
    sortable?: boolean;
    filterable?: boolean;
    defaultTableColumnWidth?: number;
}
