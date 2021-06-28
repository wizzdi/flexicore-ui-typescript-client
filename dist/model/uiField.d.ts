import { Baseclass, Category } from "@flexicore/flexicore-client";
import { Preset } from "./preset";
export interface UiField extends Baseclass {
    priority?: number;
    visible?: boolean;
    displayName?: string;
    category?: Category;
    preset?: Preset;
    dynamicField?: boolean;
}
