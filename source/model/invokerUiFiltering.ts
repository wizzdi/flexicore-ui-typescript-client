import { BasicPropertiesFilter } from "@flexicore/flexicore-client";

export interface InvokerUIFiltering {
    pageSize?: number;
    currentPage?: number;
    basicPropertiesFilter?: BasicPropertiesFilter;
    canonicalName?: string[];
    hebName?: string[];
    tooltip?: string[];
    tooltipHeb?: string[];
    invokerMethodsIds?: string[];
}