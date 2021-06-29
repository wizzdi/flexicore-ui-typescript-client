import { PaginationFilter } from "@flexicore/flexicore-client/dist/model/paginationFilter";
export interface PresetToPresetFiltering extends PaginationFilter {
    externalIds?: string[];
    parentPrestIds?: string[];
    childPresetIds?: string[];
}
