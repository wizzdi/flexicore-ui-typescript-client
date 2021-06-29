import { Baseclass, Category } from "@flexicore/flexicore-client";
import { GridPreset } from "./gridPreset";
export interface TableColumn extends Baseclass {
    priority?: number;
    visible?: boolean;
    displayName?: string;
    category?: Category;
    dynamicField?: boolean;
    preset?: GridPreset;
    sortable?: boolean;
    filterable?: boolean;
    defaultTableColumnWidth?: number;
}
