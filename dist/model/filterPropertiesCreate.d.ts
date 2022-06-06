import { BaseclassCreate } from "@flexicore/flexicore-client";
export interface FilterPropertiesCreate extends BaseclassCreate {
    filterPath?: string;
    externalize?: boolean;
    baseclassId?: string;
}
