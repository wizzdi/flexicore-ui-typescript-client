import { BaseclassCreate } from "@flexicore/flexicore-client";


export interface InvokerUICreate extends BaseclassCreate {
    unsetProperties?: string[];
    canonicalName?: string;
    hebName?: string;
    engName?: string;
    tooltip?: string;
    tooltipHeb?: string
}