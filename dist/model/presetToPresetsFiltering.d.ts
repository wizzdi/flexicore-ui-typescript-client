import { PaginationFilter } from "@flexicore/flexicore-client";
export interface PresetToPresetFiltering extends PaginationFilter {
    externalIds?: string[];
    parentPrestIds?: string[];
    childPresetIds?: string[];
}
