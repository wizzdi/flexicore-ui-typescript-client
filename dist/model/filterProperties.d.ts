import { Baseclass } from "@flexicore/flexicore-client";
import { GridPreset } from "./gridPreset";
export interface FilterProperties extends Baseclass {
    filterPath?: string;
    externalize?: boolean;
    gridPreset?: GridPreset;
}
