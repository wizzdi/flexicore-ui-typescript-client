export interface TableColumnCreate {
    name?: string;
    description?: string;
    presetId?: string;
    priority?: number;
    visible?: boolean;
    categoryName?: string;
    displayName?: string;
    sortable?: boolean;
    filterable?: boolean;
    defaultTableColumnWidth?: number;
    dynamicField?: boolean;
}
